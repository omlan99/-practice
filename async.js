function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}
// if you need to create async function you need to tell it before declaration of function
async function loadUserAsync(){
    // directly passing the fetch to variable to avoid promise hell
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    // using await to wait for data to load
    const json = await res.json();
    console.log(json)
    
}
