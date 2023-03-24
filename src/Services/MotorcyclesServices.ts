import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

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
}