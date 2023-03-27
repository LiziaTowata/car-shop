import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import ErrorUtils from '../Util/ErrorUtil';

export default class MotorcyclesServices {
  private motorcyclesDomains(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async createMoto(moto: IMotorcycle) {
    const motorcycles = new MotorcyclesODM();
    const newMoto = await motorcycles.createMoto(moto);
    return this.motorcyclesDomains(newMoto);
  }

  public async listAllMoto() {
    const motorcycles = new MotorcyclesODM();
    const listMoto = await motorcycles.listAllMoto();
    const resultMotoList = listMoto.map((moto) => this.motorcyclesDomains(moto));
    return resultMotoList;
  }

  public async getByIdMoto(id: string) {
    const motorcycles = new MotorcyclesODM();
    const resultMotoId = await motorcycles.getByIdMoto(id);
    if (!resultMotoId) throw new ErrorUtils('Motorcycle not found', 404);
    return this.motorcyclesDomains(resultMotoId);
  }

  public async getUpDateMoto(id: string, upDateMoto: IMotorcycle) {
    const motorcycles = new MotorcyclesODM();
    const resultUpDate = await motorcycles.getUpDateMoto(id, upDateMoto);
    if (!resultUpDate) throw new ErrorUtils('Motorcycle not found', 404);
    return this.motorcyclesDomains(resultUpDate);
  }
}