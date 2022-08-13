var currentImg;

function popup(image){
    currentImg = image
    let parentElement = image.parentElement;
    // console.log(currentImg.getAttribute("src"));
    parentElement.classList.remove("product-image")
    
    let popupBackground = document.querySelector(".popup")
    popupBackground.classList.remove("display-none")

    let canclePopup = document.querySelector(".cancle-popup")
    canclePopup.classList.remove("display-none")

    let popImg = document.querySelector("#popup-img")
    popImg.classList.remove("display-none")
    popImg.setAttribute("src", currentImg.getAttribute("src"))
}

function canclePopup(cancleButton){
    let popupBackground = document.querySelector(".popup")
    popupBackground.classList.add("display-none")

    cancleButton.classList.add("display-none")

    let popImg = document.querySelector("#popup-img")
    popImg.classList.add("display-none")

    let parentElement = currentImg.parentElement;
    parentElement.classList.add("product-image")
}