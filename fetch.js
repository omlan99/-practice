//creating a function naming loadData
function loadData() {
  // getting data from url
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //  it takes a promise if promise resolved then converts data to a json promise
    .then((response) => response.json())
    // it reads the promise and get the data to console
    .then((json) => console.log(json));
}

// creating a function to load user data from json placeholder  
function loadUser(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      //  we can also give function insted of console
      .then((user) => display(user))
      // .then((user) => console.log(user))
}
function display(data){
      // getting the ul
      const userList = document.getElementById('userList')

      // for looping the array of objects to get object one by one
      for(const user of data){
            // creating a li element in html
            const li = document.createElement('li');
            // pushing the user name  to li tag
            li.innerText = user.name
            // appending the li child to ul
            userList.appendChild(li)
            // cnosoling the object
            // console.log(user);
            
      }
}