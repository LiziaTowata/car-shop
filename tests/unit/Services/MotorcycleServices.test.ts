import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesServices from '../../../src/Services/MotorcyclesServices';
import Motorcycles from '../../../src/Domains/Motorcycle';

describe('deveria criar uma moto com sucesso', function () {
  it('deveria criar uma moto com sucesso', async function () {
    const motoInput: IMotorcycle = {
      model: 'Honda',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motoOutput: Motorcycles = new Motorcycles({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
    sinon.stub(Model, 'create').resolves(motoOutput);

    const service = new MotorcyclesServices();
    const result = await service.createMoto(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
  });
  it('devetia listar todos os moto com sucesso', async function () {
    const motoInput: IMotorcycle[] = [{
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    }, 
    {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    ];
    
    const motoOutput: Motorcycles[] = motoInput.map((moto) => new Motorcycles(moto));

    sinon.stub(Model, 'find').resolves(motoOutput);
  
    const service = new MotorcyclesServices();
    const result = await service.listAllMoto();
  
    expect(result).to.be.deep.equal(motoOutput);
  });

  it('deveria conseguir buscar pelo Id', async function () {
    const motoId = '634852326b35b59438fbea31';
    const motoInput: IMotorcycle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    };
  
    const motoOutput: Motorcycles = new Motorcycles(motoInput);
    sinon.stub(Model, 'findById').resolves(motoOutput);
  
    const service = new MotorcyclesServices();
    const result = await service.getByIdMoto(motoId);
  
    expect(result).to.be.deep.equal(motoOutput);
  });
});
