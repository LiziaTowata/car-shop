import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarServices from '../../../src/Services/CarServices';
import Car from '../../../src/Domains/Car';

describe('deveria criar um carro com sucesso', function () {
  it('deveria criar um carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarServices();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});

  describe('deveria listar todos os carros com sucesso', function () {
    it('devetia listar todos os carros com sucesso', async function () {
      const carInput: ICar[] = [ {
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      }, 
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      }
    ]
    
      const carOutput: Car[] = carInput.map((car) => new Car(car));

      sinon.stub(Model, 'find').resolves(carOutput);
  
      const service = new CarServices();
      const result = await service.listAllCar();
  
      expect(result).to.be.deep.equal(carOutput);
  })
});

describe('deveria conseguir buscar pelo Id', function () {
  it('deveria conseguir buscar pelo Id', async function () {
    const carId = '6348513f34c397abcad040b2';
    const carInput: ICar = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    }

    const carOutput: Car = new Car(carInput)
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarServices();
    const result = await service.getByIdCar(carId);

    expect(result).to.be.deep.equal(carOutput);
  })
})
