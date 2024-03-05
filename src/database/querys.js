export const queries = {
  getAllProducts: "SELECT * FROM Products",
  addNewProduct:
    "INSERT INTO Products (Id,Name,Description,Quantity) VALUES (@Id,@Name, @Description, @Quantity)",
  getProductById: "SELECT * FROM Products WHERE ID=@Id",
  //'DELETE FROM [webstore].[dbo].[Products] WHERE ID=@Id
  deleteProductById: "DELETE FROM Products WHERE ID=@Id",
  updateProductById: "UPDATE Products SET Name = @Name, Description = @Description, Quantity = @Quantity WHERE Id=@Id",

  ///////
  getUsers: "SELECT * FROM UsersR",
  registerNewUser: "INSERT INTO UsersR (Id,Name,Lastname,Address,Email) VALUES (@Id,@Name, @Lastname,@Address, @Email)",
  getUserById: "SELECT * FROM UsersR WHERE ID=@Id",  
  deleteUserById: "DELETE FROM UsersR WHERE ID=@Id",
  updateUserById: "UPDATE UsersR SET Name = @Name, Lastname = @Lastname, Address = @Address, Email=@Email WHERE Id=@Id",


  
};
