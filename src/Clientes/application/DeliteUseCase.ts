import { Users } from "../domain/users";
import { Repository } from "../domain/RepositoryM";

export class GetByIdClienteUseCase {
  constructor(readonly movimientoRepo: Repository) {}

  async run(id: number): Promise<Users | null> {
    try {
      const result = await this.movimientoRepo.delite(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
