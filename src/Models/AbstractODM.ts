import { model, Model, models, Schema } from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model <T>;
  protected schema: Schema;
  protected nameModel: string;

  constructor(schema: Schema, nameModel: string) {
    this.schema = schema;
    this.nameModel = nameModel;
    this.model = models[this.nameModel] || model(this.nameModel, schema);
  }

  public async create(odm: T): Promise<T> {
    return this.model.create({ ...odm });
  }
}
