const element = document.getElementById("hello-div")

console.log(element.innerText)
element.innerText = "The page has loaded."

element.onclick = () => {
    element.innerText = "I've been clicked!"
    element.classList.add("blue")
}

element.classList.remove("blue")