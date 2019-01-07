function Person(obj){
  this.name = obj.name;
  this.age = obj.age;
}


Person.prototype.say = function(){
  console.log('myName: ', this.name);
}


const L = new Person({name: 'ldifd', age: 18})



L.say();

console.log('fdjkfd')