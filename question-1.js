// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

inventory.apple.quantity = 300; 
// apple: { price: 35, quantity: 300 }
inventory.orange = {price: 20, quantity: 300}

let sumAll = [];
let result = 0;

for(let count in inventory){
  let sum = inventory[count].price * inventory[count].quantity
    sumAll.push(sum);
}

for(let i=0; i<sumAll.length; i++){
  result = result + sumAll[i];  
}

 console.log("Total inventory value: " + result + " baht");

