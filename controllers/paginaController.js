import {viaje} from "../Models/viaje.js"
import {testimonio} from "../models/testimonio.js"
import moment from "moment"


//Pagina de inicio
const paginaInicio = async(req, res) => {
    const promiseDB=[];

    promiseDB.push(viaje.findAll({
        limit: 3,
        order:[["Id","DESC"]],
    }));

    promiseDB.push(testimonio.findAll({
        limit: 3,
        order: [["Id", "DESC"]],
    }));

    //Consultar 3 viajes del modelo de Viaje
    try{
        const resultado = await Promise.all(promiseDB);


        res.render('index', {
            titulo: 'Inicio',
            viajes: resultado[0],
            testimonios: resultado[1],
            moment: moment,
        });

    }catch(err){
        console.log(err);
    }

}

const paginaNosotros = async(req, res) => {
    const promiseDB = [];

    //promiseDB.push(viaje.findAll({limit:3}));

    //try{
    //const resultado = await Promise.all(promisesDB);

    const titulo = "Nosotros"
    res.render("nosotros",{
        titulo,
        textoViaje: "Fuerteventura esta guay"
    });
    //}catch (err){
    //console.log(err);
    //}
}

const paginaContactos = async (req, res) => {
    //promiseDB.push(viaje.findAll({limit:3}));

    //try{
    //const resultado = await Promise.all(promisesDB);

    const titulo = "Contacto"
    res.render("contacto",{
        titulo
    })
    //}catch (err){
    //console.log(err);
    //}
}

const paginaViaje = async (req, res) => {
    try{
        const viajes = await viaje.findAll();

        const titulo = "Viajes";
        res.render("viajes",{
            titulo,
            viajes,
            moment: moment,
        })
    }catch (err){
        console.log(err);
    }
}

const paginaTestimonios = async (req, res) => {

    try{
        const testi = await testimonio.findAll({
            limit: 3,
            order: [["Id", "DESC"]],
        });


    const titulo = "Testimonios"
    res.render("testimonios",{
        titulo,
        testimonios: testi,
        moment: moment,
    })
    }catch (err){
        console.log(err);
    }
}

const paginaDestallesViajes = async (req, res) => {
    const {slug} = req.params;

    try{
        const resultado = await viaje.findOne({where: {slug: slug}});

        await res.render("viaje",{
            titulo: "Información del viaje",
            resultado,
            moment: moment
        })
    }
    catch (err){
        console.error(err);
    }
}

const guardarTestimonios = async (req,res) => {
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim()===''){
        errores.push({mensaje: 'El nombre está vacío'});
    }
    if (correo.trim()===''){
        errores.push({mensaje: 'El correo está vacío'});
    }
    if (mensaje.trim()===''){
        errores.push({mensaje: 'El mensaje está vacío'});
    }

    if (errores.length>0){ //Debemos volver a la vista y mostrar los errores
        res.render('testimonios', {
            titulo: 'Testimonios',
            errores: errores,
            nom: nombre,
            correo: correo,
            mensaje: mensaje,
            moment: moment,
        })
    }else{//Almacenar el mensaje en la BBDD
        try{

            await testimonio.create({nombre: nombre, correoelectronico: correo,mensaje: mensaje,});
            res.redirect('/testimonios'); //Guardo en la base de datos y lo envío a la misma vista
        }catch(error){
            console.log(error);
        }
    }
}

//Exporto para que lo pueda leer el router
export{
    paginaInicio,
    paginaNosotros,
    paginaContactos,
    paginaViaje,
    paginaTestimonios,
    paginaDestallesViajes,
    guardarTestimonios
}