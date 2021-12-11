class Person{
  constructor(){
    this.name = 'nikita'
    this.lastname = 'melnyk'
  }
  say_hello(){
    console.log(`person [${this.name} ${this.lastname}] : hello`)
  }
}

let person = new Person()



export const person1 = person
