


fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(prod) {
 console.log(prod);

let products = document.getElementById('products')
prod.forEach(prolist => {
    let list = document.createElement('li')
    list.innerText = `${prolist.name}`
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(product) {
 console.log(product);

let products = document.getElementById('fruList')
product.forEach(prolist => {
    let list = document.createElement('li')
    list.innerText = `${prolist.name}`
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});






fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(product) {
 console.log(product);

let products = document.getElementById('products')
product.forEach(prolist => {
    let list = document.createElement('li')
    list.innerText = `${prolist.name}`
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(product) {
 console.log(product);

let products = document.getElementById('vegList')
product.forEach(prolist => {
    let list = document.createElement('li')
    list.innerText = `${prolist.name}`
    products.appendChild(list)
})
})
.catch(function(error){
 console.log('error',error);
});

