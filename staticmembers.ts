class MathUtility {
  public static readonly PI: number = 3.14159;
  public static totalCalculations: number = 0;

  public static calculateArea(radius: number): number {
    MathUtility.totalCalculations++;
    return MathUtility.PI * radius * radius;
  }
}

console.log(MathUtility.calculateArea(5)); 
console.log(MathUtility.totalCalculations); 
// const m = new MathUtility(); 
