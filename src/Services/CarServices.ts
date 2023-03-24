import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorUtils from '../Util/ErrorUtil';

export default class CarServices {
  private carDomains(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.carDomains(newCar);
  }

  public async listAllCar() {
    const carODM = new CarODM();
    const listCar = await carODM.listAllCar();
    const resultCarList = listCar.map((car) => this.carDomains(car));
    return resultCarList;
  }

  public async getByIdCar(id: string) {
    const carODM = new CarODM();
    const resultCarId = await carODM.getByIdCar(id);
    if (!resultCarId) throw new ErrorUtils('Car not found', 404); 
    return this.carDomains(resultCarId);
  }

  public async getUpDateCar(id: string, upDateCar: ICar) {
    const carODM = new CarODM();
    const resultUpDate = await carODM.getUpDateCar(id, upDateCar);
    if (!resultUpDate) throw new ErrorUtils('Car not found', 404);
    return this.carDomains(resultUpDate);
  }
}
