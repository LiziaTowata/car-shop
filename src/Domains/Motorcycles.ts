import IMotorcycles from '../Interfaces/IMotorcycles';
import Vehicle from './Vehicle';

export default class Motorcycles extends Vehicle {
    private category: string;
    private engineCapacity: number;

    constructor(motorcycles: IMotorcycles) {
        super(motorcycles);
        this.category = motorcycles.category;
        this.engineCapacity = motorcycles.engineCapacity;
    }
}
