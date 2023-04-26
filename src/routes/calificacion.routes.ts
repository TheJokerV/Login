import {Router} from "express";

import { CalificacionController } from "../controllers/calificacion.controller";
import { CalificacionRepository } from "../repository/calificacion.repository";
import { checkAuth } from "../middlewares/jwt";

const router = Router();

const controller = new CalificacionController(
    new CalificacionRepository()
);

router.post("/calPost", [checkAuth], controller.create.bind(controller));

export default router;