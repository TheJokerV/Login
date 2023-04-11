import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration/actividades.declaration";
import { Actividades } from "../entity/Actividades"

export class ActividadesController{

    constructor(private repository: DatabaseRepository<Actividades>){}

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const tasks = await this.repository.List();
                res.status(200).json(tasks);

            } catch (error) {
                next(error);
            }
        }

    async get(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const {idActividades} = req.params;

                const actividad = await this.repository.get(parseInt(idActividades, 10))

                res.status(200).json(actividad);

            } catch (error) {
                next(error)
            }
        }

    }