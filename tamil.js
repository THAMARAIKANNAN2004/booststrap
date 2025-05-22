/*
function type(name){
console.log("hello"+name )
}
type("tamil")
type("kannan")


function no(a,b){
    return(a+b)
} 
    console.log(no(1,2))


  

    const obj={name:"tamil",age:"21"}
    console.log(obj["name"])
    console.log(obj["age"])





    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
    

    
//* with out this

const user1={
  name:"tamil",
  age:21,
  greet:function(){
    console.log("hello, my name is tamil and i am 21 years old")
  }
}
user1.greet()
   

//*with this

function user(name,age){
  this.name=name
  this.age=age
  this.greet=function(){
    console.log("hello, my name is "+ this.name+"and i am " +this.age+"years old")
    }
  }
const user4=new user("tamil",21)
const user2=new user("kannan",22)
user1.greet()
user2.greet()
  */

//* array math 
 console.log(Math.round(4.7))
  console.log(Math.floor(4.9))
   console.log(Math.ceil(4.1))
    console.log(Math.abs(-500))
     console.log(Math.max(10,20,25,5))
      console.log(Math.min(10,20,5))
       console.log(Math.random())
        console.log(Math.sqrt(25))
         console.log(Math.pow(2,3))




        //array methods

let bus=["ara","bs"]
bus.slice("tk")                                                
console.log(bus)


let fruits = ["Apple", "Banana", "Orange", "Grapes"];
let sliced = fruits.slice(1, 3);
 console.log(sliced)


//asyncronous

 console.log("order burger")

 console.log("fries ready")

 setTimeout(()=>{
 console.log("order ready")
 },2000);

 

 //callback

 
function cookFood(callback){
  console.log("cooking food...")


  setTimeout(()=>{
 console.log(" 21 order ready")
 },2000);
}

function eatFood(){
  console.log("eating food")
}
cookFood(eatFood)

//*
console.log("placing the order")


setTimeout(()=>{
  console.log("resturant confirmed")

  setTimeout(() => {
    console.log("food is packed")
  }, 1000);
},3000);
      






