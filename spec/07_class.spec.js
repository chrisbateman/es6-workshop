var expect = require('expect.js');

describe('Classes', () => {

  xit('has a constructor for initialization', ()=>{

    // Create an Animal class
    // Add a constructor that takes one param, the name.
    // Set this.name to the name passed in


    let animal = new Animal();
    let dog = new Animal("Dog");

    expect(animal.name).to.be(undefined);
    expect(dog.name).to.be('Dog');
  });

  xit('constructor can have default param values', ()=>{

    // Create an Animal class with a constructor
    // Make your class default (using default params) the name to "Honey Badger"


    let animal = new Animal();
    let dog = new Animal("Dog");

    expect(animal.name).to.be("Honey Badger");
    expect(dog.name).to.be('Dog');
  });

  xit('can have instance methods', ()=>{

    //Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition as a non-static function


    let animal = new Animal();

    expect(animal.sayName).not.to.be(undefined);
    expect(Animal.sayName).to.be(undefined);
    expect(animal.sayName()).to.be("My name is: Honey Badger");
  });


  xit('can have static methods', ()=>{

    // Create an Animal class, pass in the name to the constructor,
    // and add a static create method that takes a name and returns an instance



    let animal = new Animal();

    expect(animal.create).to.be(undefined);
    expect(Animal.create).not.to.be(undefined);

    let createdAnimal = Animal.create('Snake');
    expect(createdAnimal.name).to.be('Snake');
  });

  xit('can extend another class', ()=>{

    // Create an Animal class
    // Create a Dog class that extends Animal
    // Add sayName to Animal
    //


    let dog = new Dog('Fido');

    expect(dog instanceof Dog).to.be(true);
    expect(dog instanceof Animal).to.be(true);
  });

  xit('can use property setters and getters', ()=>{

    // Create an Animal class (don't pass name into constructor)
    // Add property setter for name
    // Add property getter for name
    //


    let animal = new Animal();
    animal.name = "Dog";
    expect(animal.name).to.be("Dog type of animal");
    animal.name = "Cat";
    expect(animal.name).to.be("Cat type of animal");
  });

});