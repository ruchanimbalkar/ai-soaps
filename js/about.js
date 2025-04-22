window.onload = function() {
    // Get the value from localStorage
    let itemNumber = localStorage.getItem('itemCount');
    const spanBadge = document.querySelector(".badge"); //get the cart badge
    spanBadge.classList.remove("hide");
    spanBadge.innerHTML = itemNumber;
}