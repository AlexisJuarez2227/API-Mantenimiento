import { Request, Response } from "express";

import { RevisarClientesUseCase } from "../../application/RevisarUseCase";

export class RevisarClientesController {
  constructor(readonly revisarProductUseCase: RevisarClientesUseCase) {}

  async run(req: Request, res: Response) {
    const id = req.body.id
    const nombre = req.body.nombre
    try {
      const clientes = await this.revisarProductUseCase.run(id, nombre);
      if (clientes)
        res.status(200).send(clientes)
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
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
