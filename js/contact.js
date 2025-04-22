//Contact form
const formContainerDiv= document.querySelector(".form-container");
console.log("Form Container Div: ",formContainerDiv);
const contactForm = document.querySelector("#contact-form");
console.log(contactForm);

contactForm.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault(); //prevent form's default behavior
    const data = new FormData(contactForm); //Get form data
    const dataObject = Object.fromEntries(data.entries()); //our object is inside dataObject

    console.log("Form data: ", dataObject);//print on console
    //contactForm.reset();
    let userFullName=dataObject.name;
    console.log("User name: ", userFullName);

    let userCity = dataObject.city;
    console.log("User city", userCity);

    let userEmail = dataObject.email;
    console.log("User Email", userEmail);

    let userPhone = dataObject.email;
    console.log("User phone", userPhone);

    let soapChoice = dataObject.choice;
    console.log("Soap Choice", soapChoice);

    let userOrder = dataObject.order;
    console.log("user order", userOrder);

    let userMessage = dataObject.comment;
    console.log("user message ", userMessage);

    let messageLiteral = `Thank you for reaching out ${userFullName} from ${userCity}. We received your message "${userMessage}". We will contact you shortly.`;
    let headingThree=document.createElement("h3");
    headingThree.innerHTML=messageLiteral;
    headingThree.styk
    formContainerDiv.appendChild(headingThree);
    formContainerDiv.removeChild(contactForm);

    

}