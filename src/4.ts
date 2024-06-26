// Клас Key
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  // Клас Person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  // Абстрактний клас House
  abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`Person ${person.getKey().getSignature()} entered the house.`);
      } else {
        console.log('Door is closed, cannot come in.');
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  // Клас MyHouse, що успадковує House
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('Door opened.');
      } else {
        console.log('Incorrect key, door remains closed.');
      }
    }
  }
  
  // Сценарій
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  

export {};