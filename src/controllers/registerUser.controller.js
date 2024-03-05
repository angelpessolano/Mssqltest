import { getConnection, sql, queries } from "../database";

 export const getUsers = async (req, res) => {
    

  const pool = await getConnection();
  const result = await pool.request().query(queries.getUsers);
  console.log(result);

  res.json(result.recordset);
};

export const registerNewUser = async (req, res) => {
  console.log(req.body);
  const { Id, Name, Lastname,Address,Email } = req.body;
  //,Name,Lastname,Quantity
 

  if (Name == null || Lastname == null || Address == null || Email == null ||Id==null) {
    return res.status(400).json({
      msg: "Bad request. Please fill all fields",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("ID", sql.Int, Id)
      .input("Name", sql.VarChar, Name)
      .input("Lastname", sql.VarChar, Lastname)
      .input("Address", sql.VarChar, Address)
      .input("Email", sql.VarChar, Email)
      .query(queries.registerNewUser);
    console.log(Id, Name, Lastname, Address,Email);
    res.json("Test Thunder");
  } catch (error) {
    res.status(500);
    res.send(error.message);
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