import {Router} from "express";

import { ActividadesController } from "../controllers/actividades.controller";
import { ActividadesRepository } from "../repository/actividades.repository";

const router = Router();

const controller = new ActividadesController(
    new ActividadesRepository()
);

router.get("/actList", controller.list.bind(controller));

router.get("/actGetBy/:idActividades", controller.get.bind(controller));

export default router;