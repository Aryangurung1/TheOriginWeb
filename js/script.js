let myAge = 13;
let myDogRatio = 7;
let myDogAge = myAge * myDogRatio;
console.log(myDogAge);

//Redirection

const redirect = {
    home: '/index.html',
    about: '/html/about.html',
    contact: '/html/contact.html',
    service: '/html/service.html',
}

const redirectSocials = {
    facebook: 'https://www.facebook.com/people/The-Origin-Teams/100088433953540/?mibextid=ZbWKwL',
    instagram: 'https://www.instagram.com/theoriginteams/?igshid=Yzg5MTU1MDY%3D',
    linkedin: 'https://www.linkedin.com/company/theoriginteams/'
}

function redirectTo(page){
    const url = redirect[page];
    if(url){
        window.location.href = url;
    }
}

function redirectSocialsTo(page){
    const url = redirectSocials[page];
    if(url){
        window.open(url, "_blank")
    }
}

document.getElementById("scrollToFooter").addEventListener("click", function(e) {
    e.preventDefault();
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  });

