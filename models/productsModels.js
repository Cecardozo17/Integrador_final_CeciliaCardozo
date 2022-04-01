const async = require("hbs/lib/async");
const pool = require("../db");

const getProducts = async() =>{
    try {
const query = "select * from productos";
const rows = await pool.query(query);
return rows;
} catch (error) {
    console.log(error);
}
};

const getProduct = async (id) => {
    try { 
        const query = " select * from productos where id=?";
    const row = await pool.query(query, [id]);
    return row;
    } catch (error) {
        console.log(error)
    }
};
 const addProduct = async(data) => {
     try {
         const query = "insert into productos set ?";
         const row = await pool.query(query, [data])
     }catch (error) {
         console.log(error)
     }
 }
  const deleteProduct = async (id)=> {
      const query = "delete from productos where id=?";
      const row = await pool.query(query, [id]);
      return row;
  }; 
  
module.exports = { getProducts, addProduct, getProducts , deleteProduct };