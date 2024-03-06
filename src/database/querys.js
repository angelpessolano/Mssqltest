export const queries = {
  getAllProducts: "SELECT * FROM Products",
  addNewProduct:
    "INSERT INTO Products (Id,Name,Description,Quantity) VALUES (@Id,@Name, @Description, @Quantity)",
  getProductById: "SELECT * FROM Products WHERE ID=@Id",
  //'DELETE FROM [webstore].[dbo].[Products] WHERE ID=@Id
  deleteProductById: "DELETE FROM Products WHERE ID=@Id",
  updateProductById: "UPDATE Products SET Name = @Name, Description = @Description, Quantity = @Quantity WHERE Id=@Id",

  ///////
  getUsers: "SELECT * FROM Users",
  getUserById: "SELECT * FROM Users WHERE ID=@Id",  
  deleteUserById: "DELETE FROM Users WHERE ID=@Id",
  updateUserById: "UPDATE Users SET Name = @Name, Lastname = @Lastname, Address = @Address, Email=@Email WHERE Id=@Id",


  
};
