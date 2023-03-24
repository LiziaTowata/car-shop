import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarServices from '../../../src/Services/CarServices';
import Car from '../../../src/Domains/Car';

describe('deveria criar um carro com sucesso', function() {
    it('deveria criar um carro com sucesso', async function() {
        const carInput: ICar = {
         model: 'Marea',
         year: 1992,
         color: 'Red',
         status: true,
         buyValue: 12.000,
         doorsQty: 2,
         seatsQty: 5
        }

        const carOutput: Car = new Car({
            id: "634852326b35b59438fbea2f",
            model: "Marea",
            year: 2002,
            color: "Black",
            status: true,
            buyValue: 15.99,
            doorsQty: 4,
            seatsQty: 5
          });
        sinon.stub(Model, 'create').resolves(carOutput);

        const service = new CarServices();
        const result = await service.create(carInput);

        expect(result).to.be.deep.equal(carOutput);
    });
});
