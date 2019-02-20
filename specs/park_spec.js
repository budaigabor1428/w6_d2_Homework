const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    park = new Park('Jurassic', 100);
    dinosaur1 = new Dinosaur('Velociraptor', 'Carnivore', 100)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

    it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

    it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  // it('should be able to find the dinosaur that attracts the most visitors')

  // it('should be able to find all dinosaurs of a particular species');

  // Calculate the total number of visitors per day

  //Calculate the total number of visitors per year

  //Calculate the total revenue from ticket sales for one year

});
