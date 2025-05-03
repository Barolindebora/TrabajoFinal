// configuración inicial a la base de datos ya existente compartida con el equipo 3- 
// para que funcione hay que instalar mongoose con npm install mongoose
import mongoose from 'mongoose';

export async function  connectDB () {

    try {
        await mongoose.connect ('mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB')
    }
    catch(error){
        console.error ('Error al conectar a MongoDB',error);
        process.exit(1)
    }
    
}