class Animal {
  protected species: string;
  private dna: string = "ATCG";

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(species: string, breed: string) {
    super(species);
    this.breed = breed;
  }

  public makeNoise(): string {
    // Accessible because it is protected
    return `${this.species} barks!`; 
    // console.log(this.dna); // Error: Property 'dna' is private
  }
}

const myDog = new Dog("Canine", "Golden Retriever");
console.log(myDog.makeNoise());
