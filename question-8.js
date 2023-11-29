// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
  .then(data => {
    const namesArray = data.map(user => user.name);
    console.log(namesArray);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
