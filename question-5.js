// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice() {
  // เริ่มเขียนโค้ดตรงนี้

  let sum = [];
  let result;
   for(let calc in sumOrder){
      sum.push(sumOrder[calc].price * sumOrder[calc].quantity)
     result = sum.reduce((a, b) => a + b);
   }
   console.log(result);
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
