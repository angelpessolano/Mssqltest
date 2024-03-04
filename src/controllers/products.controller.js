import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getAllProducts);
  console.log(result);

  res.json(result.recordset);
};

export const createNewProduct = async (req, res) => {
  console.log(req.body);
  const { Id, Name, Description } = req.body;
  //,Name,Description,Quantity
  let { Quantity } = req.body;

  if (Name == null || Description == null) {
    return res.status(400).json({
      msg: "Bad request. Please fill all fields",
    });
  }
  if (Quantity == null) Quantity = 0;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("ID", sql.Int, Id)
      .input("Name", sql.VarChar, Name)
      .input("Description", sql.VarChar, Description)
      .input("Quantity", sql.Int, Quantity)
      .query(queries.addNewProduct);
    console.log(Id, Name, Description, Quantity);
    res.json("Test Thunder");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", Id)
    .query(queries.getProductById);
  console.log(result);
  res.send(Id);
};
export const deleteProductById = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", Id)
    .query(queries.deleteProductById);

  res.sendStatus(204);
};

export const updateProductsById = async (req, res) => {
  const { Id } = req.params;
  const { Name, Description, Quantity } = req.body;

  if (Name == null || Description == null || Quantity == null) {
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
    .input("Description", sql.VarChar, Description)
    .input("Quantity", sql.Int, Quantity)
    .query(queries.updateProductById);

  res.json({Id: req.params.Id, Name, Description, Quantity});
  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};
