import Motorcycles from '../Domains/Motorcycles';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcyclesServices {
    private motorcyclesDomains(moto: IMotorcycles | null): Motorcycles | null {
        if (moto) {
            return new Motorcycles(moto);
        }
        return null;
    }

    public async createMoto(moto: IMotorcycles) {
        const motorcycles = new MotorcyclesODM();
        const newMoto = await motorcycles.createMoto(moto);
        return this.motorcyclesDomains(newMoto);
    }
}