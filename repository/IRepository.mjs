class IRepository{
    
    obtenerPorId(id){
        throw new Error('Metodo obtenerPorID() no implementado');
    }

    obtenerTodos(){
        throw new Error('Metodo obtenerTodos() no implementado');
    }

    insertarPais(nuevoPais){
        throw new Error ('Metodo insertarPais() no implementado')
    }
    
    modificarPais(id, paisModificado){
        throw new Error ('Metodo modificarPais() no implementado')
    }
    borrarPais(id){
        throw new Error ('Metodo borrarPais() no implementado')
    }
    obtenerPaisesPorHablaHispana(lenguaje){
        throw new Error ('Metodo obtenerPaisesPorHablaHispana() no implementado')
    }


}
export default IRepository;
