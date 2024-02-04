//Base class for all objects
class AnimalKingdom {
    constructor(name) {
      this.name = name;
    
      if (this.constructor == AnimalKingdom) {
        throw new Error("AnimalKingdom cannot be Instantiated");
      }


    }

    reproductionStatus = `Sexual Reprduction`;
    feeding = `Heterotroph`;
    cellStatus = `Multicellular eukaryotes`;
    senseOrgans = `eyes`;

    //A Protected class
    #eat() {
      console.log(`I am a ${this.feeding}.`);
      return;
    }
  
    move() {
      console.log("I can move.");
      return this.move;
    }
    //Calling the Protected class eat()
    callEat() {
      this.#eat();
      return this.callEat;
    }
  }
  
  var listOfAnimalclass = [];
  //Sub class Invertebrates
  class Invertebrates extends AnimalKingdom {
    listOfAnimalclass = ["Arthropoda"];
  }
  //Sub class Vertebrates
  class Vertebrates extends AnimalKingdom {
    listOfAnimalclass = ["Fish, Amphibia, Reptiles, Aves, Mammals."];
  }
  
  const invertebrates = new Invertebrates("Invertebrates");
  const vertebrates = new Vertebrates("vertebrates");
  
  console.log(invertebrates);
  console.log(vertebrates);
  console.log(vertebrates.callEat());
  console.log(invertebrates.move());
  
  class WarmBlooded extends Vertebrates {
    //overide name in super class
    listOfAnimalclass = ["Aves, Mammals"];
  }
  
  class ColdBlooded extends Invertebrates {
    listOfAnimalclass = ["Arthropoda"];
  }
  
  const warmBlooded = new WarmBlooded("Warm Blooded");
  
  const coldBlooded = new ColdBlooded("Cold Blooded");
  
  console.log(coldBlooded);
  console.log(warmBlooded);