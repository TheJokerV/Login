import { NotFound } from "http-errors";

import database from "../config/database";

import { Actividades } from "../entity/Actividades";
import { DatabaseRepository, Query } from "../declaration/actividades.declaration";

export class ActividadesRepository implements DatabaseRepository<Actividades>{
    
    //COMANDOS
    async List(query?: Query | undefined): Promise<Actividades[]> {
        const repository = database.getRepository(Actividades);
        return repository.find();
    }
    
    async get(idActividades: number, query?: Query | undefined): Promise<Actividades> {
        const repository = database.getRepository(Actividades);

        const actividad = await repository.findOneOrFail({where:{idActividades: idActividades}});

        if (!actividad) throw new NotFound("Task does not exist.");

        return actividad;
    }  
}