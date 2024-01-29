// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
async function getData() {
  try{
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let finalresult = await data.json()
    console.log(finalresult)
    let messageDiv = document.getElementById('message')
    finalresult.forEach((user) => {
      messageDiv.innerHTML += `<div class="player">
      <div class="strength">Name : ${user.name}</div>
      <div>Email   : ${user.email}</div>
      <div>Phone   : ${user.phone}</div>
      <div>Website : ${user.website}</div>
      <div>Company : ${user.company.name}</div>
      <div>City    : ${user.address.city}</div>
      <div>Zipcode : ${user.address.zipcode}</div>
     </div>`
    })
  }
  catch (er){
    console.log(er)
  }
}

getData()
// Progression 2: Display the fetched data in the form of list

// Progression 3: When the promise call is rejected then throw an error
