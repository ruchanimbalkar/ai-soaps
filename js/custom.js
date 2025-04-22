/* JavaScript*/
console.log("JavaScript");

let itemCount=0;
console.log("item count: ", itemCount);

const spanBadge = document.querySelector(".badge"); //get the cart badge
//const cartDiv = document.getElementsByClassName(".myclass");


const orderButton = document.querySelectorAll(".order-button");
console.log("order button",orderButton);
const blueSoapButton = document.querySelector(".blue-soap");
console.log("Blue Soap", blueSoapButton);

const cucumberSoapButton = document.querySelector(".cucumber-soap");
console.log("Cucumber Soap", cucumberSoapButton);

const earthSoapButton = document.querySelector(".fearth-soap");
console.log("Earth Soap", earthSoapButton);

const heartSoapButton = document.querySelector(".heart-soap");
console.log("Heart Soap", heartSoapButton);

const jasmineSoapButton = document.querySelector(".jasmine-soap");
console.log("Jasmine Soap", jasmineSoapButton);

const lemonSoapButton = document.querySelector(".lemon-soap");
console.log("lemon Soap", lemonSoapButton);

const multiSoapButton = document.querySelector(".nmbl-soap");
console.log("Multi Soap", multiSoapButton);

const neemSoapButton = document.querySelector(".neem-soap");
console.log("Neem Soap", neemSoapButton);

const roseSoapButton = document.querySelector(".rose-soap");
console.log("Rose Soap", roseSoapButton);

let blueSoap = 0;
let cucumberSoap =0;
let earthSoap = 0;
let heartSoap = 0;
let jasmineSoap = 0;
let lemonSoap = 0;
let multiSoap =0;
let neemSoap =0;
let roseSoap = 0;

function cartTotal(soap){
    itemCount++;
    switch (soap) {
        case "blue":
            blueSoap++;
            break;
        case "cucumber":
            cucumberSoap++;
            break;
        case "earth":
            earthSoap++;
            break;
        case "heart":
            heartSoap++;
            break;
        case "jasmine":
            jasmineSoap++;
            break;
        case "lemon":
            lemonSoap++;
            break;
        case "multi":
            multiSoap++;
            break;
        case "neem":
            neemSoap++;
            break;
        case "rose":
            roseSoap++;
            break;
        default:
            break;
        
    }
    console.log("item count", itemCount);
    console.log(soap);
    spanBadge.classList.remove("hide");
    spanBadge.innerHTML = itemCount;
  
    // Store the value in localStorage
    localStorage.setItem('itemCount', itemCount);

    // Redirect to the second page
    //window.location.href = 'cart.html';

    // const cartPage = document.querySelector(".myCart");
    // console.log("Cart Page", cartPage);
    // cartPage.addEventListener("click", updateCartMessage(itemCount));
}
  
// function updateCartMessage(itemCount){
//     console.log("On Cart Page");
//     let updatedCart=`You have ${itemCount} items in your cart`;
//     headingTwo.textContent = updatedCart;
// }

blueSoapButton.addEventListener("click", function(){cartTotal("blue")});
cucumberSoapButton.addEventListener("click", function(){cartTotal("cucumber")});
earthSoapButton.addEventListener("click", function(){cartTotal("earth")});
heartSoapButton.addEventListener("click", function(){cartTotal("heart")});
jasmineSoapButton.addEventListener("click",function(){cartTotal("jasmine")});
lemonSoapButton.addEventListener("click",function(){cartTotal("lemon")});
multiSoapButton.addEventListener("click",function(){cartTotal("multi")});
neemSoapButton.addEventListener("click", function(){cartTotal("neem")});
roseSoapButton.addEventListener("click", function(){cartTotal("rose")});



// blueSoapButton.addEventListener("click", cartTotal);
// cucumberSoapButton.addEventListener("click", cartTotal);
// earthSoapButton.addEventListener("click", cartTotal);
// heartSoapButton.addEventListener("click", cartTotal);
// jasmineSoapButton.addEventListener("click",cartTotal);
// lemonSoapButton.addEventListener("click",cartTotal);
// multiSoapButton.addEventListener("click",cartTotal);
// neemSoapButton.addEventListener("click", cartTotal);
// roseSoapButton.addEventListener("click", cartTotal);

