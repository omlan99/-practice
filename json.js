// javascrip objec noaion json
const user = {id: 1, name: "Buffet", job:"investor"};
// what does stringify does? It converts the object into a string
const stringify = JSON.stringify(user);
// console.log(stringify);
const shop ={
    name : 'xyz',
    owner : 'abc',
    address : {
        street : 'rajpoth',
        address : 'foothpat',
        city : 'No man land'
    },
    product : ['laptop', 'mobile', 'camera'],
    revenue : 43000,
    isOpen: true,
    isNew: false
}
const shopJson= JSON.stringify(shop);
console.log(shopJson);
// what does json.parse does it makes string object into an object
const shpObj = JSON.parse(shopJson)
console.log(shpObj)