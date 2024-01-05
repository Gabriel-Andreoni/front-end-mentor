const handleSubmitForm = (e) => {
    e.preventDefault();

    const mainWrapper = document.querySelector(".main-wrapper");
    const contentContainer = document.querySelector(".content-container");
    const imgContainer = document.querySelector(".img-container");

    const userEmail = document.querySelector("#user-email").value;

    if (userEmail.includes("@")) {
        mainWrapper.style.width = '400px';
        contentContainer.style.display = 'none';
        imgContainer.style.display = 'none';

        const sucessContainer = document.createElement("div");
        sucessContainer.classList.add("sucess-wrapper");
        sucessContainer.innerHTML =`
            <img src="assets/images/icon-success.svg" alt="" />
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has ben sent to <strong>${userEmail}.</strong> Please open it and click the button inside to confirm your subscription.</p>
            <button onclick="handleDimissMessage()">Dismiss message</button>
        `;

        mainWrapper.appendChild(sucessContainer);

    } else {
        const formWrapper = document.querySelector("#form-wrapper");
        formWrapper.classList.add("error-state");
    }
}

const handleDimissMessage = () => {
    const sucessWrapper = document.querySelector(".sucess-wrapper");
    sucessWrapper.style.display = 'none';

    const mainWrapper = document.querySelector(".main-wrapper");
    mainWrapper.style.width = "800px";

    const contentContainer = document.querySelector(".content-container");
    contentContainer.style.display = "flex";

    const imgContainer = document.querySelector(".img-container");
    imgContainer.style.display = "block";

}


const form = document.querySelector("#form-wrapper");
form.addEventListener("submit", handleSubmitForm);