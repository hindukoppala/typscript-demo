class Employee {
  // Accessible inside Employee and any child classes
  protected baseSalary: number; 

  constructor(baseSalary: number) {
    this.baseSalary = baseSalary;
  }
}

class Manager extends Employee {
  private bonus: number;

  constructor(baseSalary: number, bonus: number) {
    super(baseSalary); // Pass value to parent constructor
    this.bonus = bonus;
  }

  public getCalculatePayout(): number {
    // Legal: Can access 'baseSalary' because Manager is a subclass
    return this.baseSalary + this.bonus; 
  }
}

// --- Usage ---
const manager = new Manager(50000, 10000);

console.log(manager.getCalculatePayout()); // Outputs: 60000 (Legal)

// Error: Property 'baseSalary' is protected and only accessible 
// within class 'Employee' and its subclasses.
console.log(manager.baseSalary); 
