# Animal Kingdom Hierarchy

This code represents a simple hierarchy of classes modeling the Animal Kingdom, showcasing key object-oriented programming (OOP) principles: **abstraction**, **polymorphism**, **encapsulation**, and **inheritance**.

## Object-Oriented Principles

### 1. Abstraction

Abstraction involves simplifying complex systems by modeling classes based on their essential features and ignoring irrelevant details. In this code, abstraction is demonstrated through the `AnimalKingdom` class, which encapsulates general properties and behaviors common to all animals.

```javascript
class AnimalKingdom {
  // ... (other code)

  move() {
    console.log("I can move.");
    return this.move;
  }

  // ... (other code)
}
```

The `move()` method is an abstraction of the general ability of animals to move, providing a high-level representation without exposing the specific details of how each animal moves.

### 2. Polymorphism

Polymorphism, specifically method overriding, occurs when subclasses provide specific implementations for methods already defined in their superclass. This code demonstrates polymorphism through the `WarmBlooded` and `ColdBlooded` subclasses, which override the `listOfAnimalclass` attribute.

```javascript
class WarmBlooded extends Vertebrates {
  listOfAnimalclass = ["Aves, Mammals"];
}

class ColdBlooded extends Invertebrates {
  listOfAnimalclass = ["Arthropoda"];
}
```

In both cases, the subclasses provide their own implementations for the `listOfAnimalclass` attribute, showcasing polymorphism.

### 3. Encapsulation

Encapsulation involves bundling the data (attributes) and methods that operate on the data within a single unit, restricting access to some of the object's components. In this code, encapsulation is demonstrated through the use of the `#eat()` method, which is a protected method.

```javascript
class AnimalKingdom {
  // A Protected class
  #eat() {
    console.log(`I am a ${this.feeding}.`);
    return;
  }

  // ... (other code)
  
  // Calling the Protected class eat()
  callEat() {
    this.#eat();
    return this.callEat;
  }
}
```

The `#eat()` method is encapsulated within the `AnimalKingdom` class and can only be accessed from within the class itself, showcasing encapsulation.

### 4. Inheritance

Inheritance is the mechanism of creating a new class that is a modified version of an existing class. In this code, inheritance is demonstrated through the creation of subclasses `Invertebrates`, `Vertebrates`, `WarmBlooded`, and `ColdBlooded` that extend the base class `AnimalKingdom`.

```javascript
class Invertebrates extends AnimalKingdom {
  listOfAnimalclass = ["Arthropoda"];
}

class Vertebrates extends AnimalKingdom {
  listOfAnimalclass = ["Fish, Amphibia, Reptiles, Aves, Mammals."];
}
```

The subclasses inherit properties and behaviors from the `AnimalKingdom` class, showcasing the use of inheritance.

## Example Usage

```javascript
const invertebrates = new Invertebrates("Invertebrates");
const vertebrates = new Vertebrates("Vertebrates");

console.log(invertebrates);
console.log(vertebrates);
console.log(vertebrates.callEat());
console.log(invertebrates.move());

const warmBlooded = new WarmBlooded("Warm Blooded");
const coldBlooded = new ColdBlooded("Cold Blooded");

console.log(coldBlooded);
console.log(warmBlooded);
```

This example demonstrates the instantiation of various classes and their usage in accordance with the principles of OOP. Feel free to explore and modify the code to suit your specific needs.
