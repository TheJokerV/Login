import { NotFound } from "http-errors";

import database from "../config/database";

import { Calificacion} from "../entity/Calificacion";
import { DatabaseRepository, Query } from "../declaration/calificacion.declaration";

export class CalificacionRepository implements DatabaseRepository<Calificacion>{
    
    //COMANDOS
    async create(data: Array<any>, query?: Query | undefined): Promise<any> {
        const repository = database.getRepository(Calificacion);
      
        const calificacion = repository.create(data);
      
        const failedInsertions: Array<Calificacion> = [];
      
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          try {
            await repository.query(
              `INSERT INTO calificacion (idEmpresa, idPregunta, fecha, calificacion) VALUES (${item.idEmpresa}, ${item.idPregunta}, DATE(NOW()), ${item.calificacion})`
            );
          } catch (error) {
            failedInsertions.push(item);
          }
        }
      
        const successCount = data.length - failedInsertions.length;
        const failCount = failedInsertions.length;
      
        if (failCount > 0) {
          return {
            success: false,
            message: `Se insertaron ${successCount} calificaciones exitosamente y ${failCount} no fueron exitosas.`,
            failedInsertions: failedInsertions,
          };
        } else {
          return {
            success: true,
            message: `Se insertaron todas las calificaciones exitosamente.`,
          };
        }
      }
    
}

