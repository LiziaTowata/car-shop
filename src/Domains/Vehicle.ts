import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicleObj: IVehicle) {
    this.id = vehicleObj.id;
    this.model = vehicleObj.model;
    this.year = vehicleObj.year;
    this.color = vehicleObj.color;
    this.status = vehicleObj.status || false;
    this.buyValue = vehicleObj.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }
}