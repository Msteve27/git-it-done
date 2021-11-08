
// example on how to make a API URL a variable
let requestURL = "copy and paste the API URL here";


fetch("requestURL")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});


// example if statements to verify response
if (response.ok) {
    response.json().then(function(data) {

    });
}


// example on how to write a fetch request
let makeHTML = function(json) {
    document.getElementById("json").innerHTML = JSON.stringify(json, undefined, 2);
};

fetch("APR URL")
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    makeHTML(myJson);
})
.catch(function(error) {
    console.log(error)
});