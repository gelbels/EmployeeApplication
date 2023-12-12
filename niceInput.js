const elements = document.querySelectorAll(".input-text");

const handleFocus = (event) => {
    const target = event.target
    target.parentElement.classList.add("input-focus")
    target.parentElement.classList.add("input-active")

    target.setAttribute("placeholder", target.getAttribute("data-placeholder"))
}

const handleBlur = (event) => {
    const target = event.target

    target.parentElement.classList.remove("input-focus")
    if (!target.value) {
        target.parentElement.classList.remove("input-active")
    }

    target.removeAttribute("placeholder")
}

const elementBindEvents = (element) => {
    const inputs = element.querySelectorAll(".input-text input");
    inputs.forEach((input) => {
        input.addEventListener("focus", handleFocus)
        input.addEventListener("blur", handleBlur);
    })
}

elements.forEach((element) => {
    elementBindEvents(element);

    if (element.querySelector("input").value) {
        element.classList.add("input-active")
    }
})