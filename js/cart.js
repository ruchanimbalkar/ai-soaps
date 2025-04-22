window.onload = function() {
    // Get the value from localStorage
    let itemNumber = localStorage.getItem('itemCount');
    const spanBadge = document.querySelector(".badge"); //get the cart badge
    // Display the value on the page
    // const cartDiv = document.querySelector(".myclass");
    // console.log("cart div", cartDiv);//printing on console
    const headingTwo = document.querySelector(".cart-heading");//get the cart page heading 2
    console.log("h2",headingTwo);//print on console
    let updatedCart=`You have ${itemNumber} items in your cart`;
    headingTwo.textContent = updatedCart;
    spanBadge.classList.remove("hide");
    spanBadge.innerHTML = itemNumber;
};