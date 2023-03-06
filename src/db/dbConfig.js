import mongoose  from "mongoose";

const contrasena ="kG8IJrpLX1hESmGE"


const uri = "mongodb+srv://JS:kG8IJrpLX1hESmGE@cluster0.einlumx.mongodb.net/ecommerceCodeer?retryWrites=true&w=majority"

async function main() {
 const conn =  await mongoose.connect(uri);
try {
  if(conn){
     console.log('Conectado a la base de datos con exito')
    }else{
        console.log('Hubo un error de conexion a la base de datos')
    }   
} catch (error) {
 console.log(error)   
}}
main()