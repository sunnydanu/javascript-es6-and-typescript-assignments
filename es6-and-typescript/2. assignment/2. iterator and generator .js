class ArmStrongNumber {
  constructor() {
    this.generator = this.myGenerator();
  }
  reset() {
    this.generator = this.myGenerator();
    console.info("generator reset to default 0")
  }
  getNextArmStrongNumber() {
   
    return this.generator.next().value;
  }

  *myGenerator() {
    for (let i = 0; i <= 2000; i++) {
      let numberOfDigits = i.toString().length;

      let sum = 0;

      let temp = i;

      while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;

        temp = parseInt(temp / 10);
      }

      if (sum == i) {
        // console.log(i);
        yield i;
      }

      if (i >= 1000) {
        return "Max limit reached";
      }
    }
  }
}

const asm = new ArmStrongNumber();


console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());

asm.reset()
 
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
console.log(asm.getNextArmStrongNumber());
