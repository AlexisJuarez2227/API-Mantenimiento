import { Users } from "../../domain/users";
import { Repository } from "../../domain/RepositoryM";
import { UsersData } from "../../Data/UserData";

export class MongoDBClientesRepository implements Repository{
    async update(userId: number, nombre:string): Promise<Users | null> {
        try {
            const index = UsersData.findIndex(user => user.id===userId);
            if (index !==1){
                UsersData[index] = {id: userId, nombre: nombre, password: UsersData[index].password}
            }
            return UsersData[index]
        } catch (error) {
            return null
        }
    }
    async getAll(): Promise<Users[] | null> {
        try {
            const users = UsersData;
            return users.map(
                (user: any) =>
                    new Users(
                        user.id,
                        user.nombre,
                        user.password
                    )
            );
        } catch (error) {
            return null;
        }
    }
    async delite(userId: number): Promise<Users | null> {
        try {
            const index = UsersData.findIndex(obj => obj.id===userId);
            UsersData.filter(user => user.id===userId)
            return UsersData[index]
        } catch (error) {
            return null
        }
    }
    async createCliente(id: number, nombre: string, password: string): Promise<Users | null> {
        try {
            const nuevoUsuario = new Users(id, nombre, password);
            UsersData.push(nuevoUsuario);
            return nuevoUsuario;
        } catch (error) {
            return null
        }
    }
    
}