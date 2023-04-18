import { Router } from "express";

import actividadesRoutes  from "./actividades.routes";
import preguntasRoutes from "./preguntas.routes";
import empresaRoutes from "./empresa.routes";
import authRoutes from "./auth.routes";
import cualificacionRoutes from "./cualificacion.routes";

const routes = Router();

routes.use('/actividades', actividadesRoutes)
routes.use('/preguntas', preguntasRoutes)
routes.use('/empresas', empresaRoutes)
routes.use('/cualificacion', cualificacionRoutes)

routes.use('/auth', authRoutes)

export default routes;