import {Router} from "express";

import { PreguntasController } from "../controllers/preguntas.controller";
import { PreguntasRepository } from "../repository/preguntas.repository";

const router = Router();

const controller = new PreguntasController(
    new PreguntasRepository()
);

router.get("/prgList", controller.list.bind(controller));

router.get("/prgGetBy/:idPreguntas", controller.get.bind(controller));

export default router;