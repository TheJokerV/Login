import { Router } from "express";

import actividadesRoutes  from "../routes/actividades.routes";
import preguntasRoutes from "../routes/preguntas.routes";

const routes = Router();

routes.use('/actividades', actividadesRoutes)
routes.use('/preguntas', preguntasRoutes)

export default routes;