import { Users } from "./users";

export interface Repository {
  getAll(): Promise<Users[] | null>;
  delite(userId: number): Promise<Users | null>
  createCliente(
    id:number,
    nombre: string,
    password: string
  ): Promise<Users | null>;
  update(userId: number, nombre: string): Promise<Users|null>
}
