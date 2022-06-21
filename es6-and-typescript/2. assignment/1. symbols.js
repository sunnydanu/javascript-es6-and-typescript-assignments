class Fibonacci {
  #previousNo = 0;
  #currentNo = 1;
  #temp

   next() {
   
    this.nextNum = this.#previousNo + this.#currentNo;
    this.#temp = this.#currentNo
    this.#currentNo = this.nextNum
    this.#previousNo = this.#temp 

    return  this.nextNum
  }
}

const Fn = new Fibonacci();
console.log(Fn.next())
console.log(Fn.next())
console.log(Fn.next())
console.log(Fn.next())
console.log(Fn.next())
console.log(Fn.next())
console.log(Fn.next())
