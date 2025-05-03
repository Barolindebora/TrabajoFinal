import { obtenerPaisesPorId, obtenerTodosLosPaises, actualizarPais, crearPais, borrarPaisPorId  } from "../services/paisService.mjs";   



export async function  obtenerPaisPorIdController(req, res) {
    try{ 
        const {id}=req.params;
        const pais =await obtenerPaisesPorId(id);
        if (!pais)
            return res.status(404).send ({mensaje:'Pais no encontrado'});
        const paisFormateado=renderizarPais(pais);
        res.status(200).json(paisFormateado);

    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener el pais', error:error.message})
    }
    
}


export async function  obtenerTodosLosPaisesController(req, res) {
    try{ 
        const paises =await obtenerTodosLosPaises();
       res.render('dashboard', { title: "Paises", paises });
    } catch (error){
        res.status(500).send ({mensaje: 'Error al obtener los paises', error:error.message})
    }
    
}

export async function crearPaisController(req, res) {
    try {
    const datosPais = req.body;
    const nuevoPais = await crearPais(datosPais);
    res.redirect('/api/dashboard');
    }

    catch (error) {
        res.status(500).send({ mensaje: "Error al crear el pais", error: error.message });
    }

}

export async function actualizarPaisController(req, res) {

    try {
        const { id } = req.params;
        const nuevosDatos = req.body;
        const paisActualizado = await actualizarPais(id, nuevosDatos);
        res.redirect('/api/dashboard');
    } catch (error) {
        res.status(500).send({ mensaje: "Error al actualizar el pais", error: error.message });
    }
}


export async function borrarPaisIdController(req, res) {
    const { id } = req.params; //id a borrar

    try {
        const paisBorrado = await borrarPaisPorId(id);

        if (!paisBorrado) {
            return res.status(404).send({ mensaje: 'País no encontrado' });
        }

        // Devolver el país borrado
        res.redirect ('/api/dashboard')
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar el país', error: error.message });
    }

    
}

/*export const modificarSuperheroeFormularioController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const superheroeaEditar = await obtenerSuperheroesPorId( id );
        
        res.render('editSuperhero', {title: "Editar Superheroe", superheroeaEditar });
        
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al cargar formulario`,
            error: error.message
        });
    }
}

//controlador para mostrar el index
export const mostrarIndexController = (req, res) => {
    try {
        res.render('index', { // Renderiza la vista index.ejs
            
            title: 'Página de Inicio',
      
        });

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al cargar la vista del índice',
            error: error.message
        });
    }
};*/