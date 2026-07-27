class Person {
  public readonly id: number;
  private secretCode: string;
  protected familyName: string;

  constructor(id: number, name: string, secret: string, family: string) {
    this.id = id;
    this.secretCode = secret;
    this.familyName = family;
  }

  public getDetails(): string {
    return `ID: ${this.id}, Family: ${this.familyName}`;
  }
}

const p = new Person(1, "Alice", "12345", "Smith");
console.log(p.getDetails()); 
// p.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
