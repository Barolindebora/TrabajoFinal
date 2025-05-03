
import mongoose from 'mongoose';

const paisSchema = new mongoose.Schema({
  name: {
    spa: {
      official: String
    }
  },
  capital: [String],
  borders: [String],
  area: Number,
  population: Number,
  gini: {
    "2019": Number // Solo si tenés un año fijo. Se puede adaptar si hay más años.
  },
  timezones: [String],
  creador: String
}, { timestamps: true });

/* const superHero  =mongoose.model('SuperHero', superheroeSchema, 'Grupo-03');
 export default superHero;*/ 

const Paises = mongoose.model('Paises', paisSchema, 'Grupo-03');
 export default Paises;