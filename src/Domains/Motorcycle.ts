import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycles extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycles: IMotorcycle) {
    super(motorcycles);
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
  }
}
