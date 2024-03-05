import { getConnection, sql, queries } from "../database";
const bcrypt = require('bcryptjs');

 export const getUsers = async (req, res) => {
    

  const pool = await getConnection();
  const result = await pool.request().query(queries.getUsers);
  console.log(result);

  res.json(result.recordset);
};

export const register = async (req, res) => {
  try {
    const { Name, Lastname, Address, Email, Password } = req.body;

    // Generate a new salt and combine it with the password (incorrectly done in original code)
    const salt = await bcrypt.genSalt(10); // Use async/await for bcrypt 5+
    const hashedPassword = await bcrypt.hash(Password, salt);

    // Insert the user into the database
    const pool = await getConnection();

    await pool.request()
      .input("Email", sql.VarChar, Email)
      .input("Name", sql.VarChar, Name)
      .input("Lastname", sql.VarChar, Lastname)
      .input("Address", sql.VarChar, Address)
      .query(
        `INSERT INTO Users ( Email, Password, Salt, Name, Lastname, Address)
                     VALUES ( '${Email}', '${hashedPassword}', '${salt}', '${Name}', '${Lastname}', '${Address}')`
      );

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Busca el usuario en la base de datos
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`SELECT Password, Salt FROM Users WHERE Email = '${Email}'`);

    if (result.recordset.length === 0) {
      res.status(401).json({ message: 'Usuario no encontrado' });
      return;
    }

    const storedPassword = result.recordset[0].Password;
    const salt = result.recordset[0].Salt;

    // Verifica la contraseña ingresada (corrected comparison)
    if (await bcrypt.compare(Password, storedPassword)) { // Use async/await for bcrypt 5+
      res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
      res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al autenticar el usuario' });
  }
};


export const getUserById = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", Id)
    .query(queries.getUserById);
  console.log(result);
  res.send(Id);
};
export const deleteUserById = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", Id)
    .query(queries.deleteUserById);

  res.sendStatus(204);
};

export const updateUserById = async (req, res) => {
  const { Id } = req.params;
  const { Name, Lastname,Address,Email } = req.body;

  if (Name == null || Lastname == null || Address == null || Email == null ||Id==null) {
    return res.status(400).json({
      msg: "Bad request. Please fill all fields",
    });
  }
  try{

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("ID", sql.Int, Id)
    .input("Name", sql.VarChar, Name)
    .input("Lastname", sql.VarChar, Lastname)
    .input("Address", sql.VarChar, Address)
    .input("Email", sql.VarChar, Email)
    .query(queries.updateUserById);

  res.json({Id: req.params.Id, Name, Lastname, Address,Email});
  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};