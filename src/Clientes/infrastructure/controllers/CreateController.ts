import { Request, Response } from "express";
import { CreateClientesUseCase } from "../../application/CreateUseCase";
import { MysqlClientesRepository } from "../adaptadores/MysqlClientesRepository";

export class CreateClienteController {
  constructor (
    readonly createClienteUseCase: CreateClientesUseCase,
    readonly mysqlRepo: MysqlClientesRepository
    ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const cliente = await this.createClienteUseCase.run(
        data.id,
        data.nombre,
        data.password,
      );
      if (cliente){
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: cliente.id,
            nombre: cliente.nombre,
            telefono: cliente.password,
          },
        });
        console.log('Registro exitoso')
      }
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
