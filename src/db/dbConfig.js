import mongoose  from "mongoose";

const uri = "mongodb+srv://JS:coderJS@cluster0.einlumx.mongodb.net/ecommerce?retryWrites=true&w=majority"

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(uri,options).
  catch((error)=>{
    if(error){
      console.log('Hubo un error de conexion',error)
    }else{
      console.log('conexion exitosa')
    }
  });