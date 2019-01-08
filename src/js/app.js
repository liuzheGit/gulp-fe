function Person(obj){
  this.name = obj.name;
  this.age = obj.age;
}


Person.prototype.say = function(){
  console.log('myName: ', this.name);
}


const L = new Person({name: 'ldifd', age: 18})

let url = 'https://jsonplaceholder.typicode.com/todos/2';
fetch(url).then( res => res.json())
  .then(json => {
    console.log(json);
  })
