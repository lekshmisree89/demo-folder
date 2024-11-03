export default class AdvancedMath {

  factorial(value: number): number {
    if (value < 0) {
      throw new Error('Value must be greater than 0');
    }

    if (value === 0) {
      return 1;
    }

    if (value === 1) return 1;
      
    
let factorial = 1;
    for(let i= 1; i <= value; i++ ){
      factorial *= i;
    }
    return factorial;
    
  }
}
