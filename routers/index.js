import express from "express";
import {paginaInicio,paginaNosotros,paginaContactos,paginaViaje,paginaTestimonios,paginaDestallesViajes,guardarTestimonios,borrarTestimonios} from "../controllers/paginaController.js"

const router = express.Router();

router.get("/", paginaInicio)

router.get("/nosotros", paginaNosotros)

router.get("/contacto",paginaContactos)

router.get("/viajes",paginaViaje)

router.get("/testimonios",paginaTestimonios)

router.get("/viajes/:slug",paginaDestallesViajes)

router.post("/testimonios",guardarTestimonios)

router.post("/borrarTestimonio",borrarTestimonios)

export default router;