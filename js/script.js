let myAge = 13;
let myDogRatio = 7;
let myDogAge = myAge * myDogRatio;
console.log(myDogAge);

//Redirection

const redirect = {
    home: '/index.html',
    about: '/html/about.html',
    contact: '/html/contact.html',
    service: '/html/service.html'
}

function redirectTo(page){
    const url = redirect[page];
    if(url){
        window.location.href = url;
    }
}

