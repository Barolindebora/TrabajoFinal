import IRepository from "./IRepository.mjs";
import Paises from "../model/Paises.mjs";

class PaisRepository extends IRepository {
    
    async obtenerPorId(id){
        return await Paises.findById(id);
    }

    async obtenerTodos(){
        return await Paises.find({});
    }

    async insertarPais(nuevoPais) {
        const pais = new Paises(nuevoPais);
        return await pais.save();
    }

    async actualizarPais(id, datosActualizados) {
        const { name, capital, borders, area, population, gini, timezones, creador } = datosActualizados;
        const pais = await Paises.findOneAndUpdate(

        { _id: id }, 

        { $set: { name: name, capital: capital, borders: borders, area: area, population: population, gini: gini, timezones: timezones, creador: creador } },

        { new: true }

      )

      return pais; 
}
    
       
           async borrarPorId(id) {
            return await Paises.findByIdAndDelete(id);
           }
       
       
        }
    
        export default new PaisRepository();
