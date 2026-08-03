class Employee {
  protected baseSalary: number; 

  constructor(baseSalary: number) {
    this.baseSalary = baseSalary;
  }
}

class Manager extends Employee {
  private bonus: number;

  constructor(baseSalary: number, bonus: number) {
    super(baseSalary);
    this.bonus = bonus;
  }

  public getCalculatePayout(): number {
    return this.baseSalary + this.bonus; 
  }
}

const manager = new Manager(50000, 10000);

console.log(manager.getCalculatePayout()); 

console.log(manager.baseSalary); 
