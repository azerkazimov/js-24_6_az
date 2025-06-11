const uniq = document.getElementById("uniqueElement");

console.log(uniq);

uniq.textContent = "Hello guys. Dubayda veziyet necedi??";
uniq.textContent = " Dubaycilker siz neden danisirsiz";
uniq.style.backgroundColor = "red";
uniq.style.color = "yellow";

const buttonText = "Yenile";

const common = document.querySelector(".common");

common.innerHTML = `<button class="update">${buttonText}</button>`;

const content = document.querySelector(".content");
console.log(content);

const link = document.querySelector("a");
console.log(link);

console.log(link.getAttribute("target"));

link.setAttribute("href", "https://w3school.com");

// link.removeAttribute("href")
console.log(link.getAttribute("href"));

console.log(link.hasAttribute("href"));

content.classList.add("isActive");
console.log(content.classList.contains("isActive"));

const greeting = "Salam";

const newDiv = document.createElement("div");
newDiv.className = "heading";
newDiv.innerHTML = `<h1>${greeting}</h1>`;

content.prepend(newDiv);
const greet = "Hello";

const newOne = document.createElement("div");
newOne.className = "heading";
newOne.innerHTML = `<h1>${greet}</h1>`;

// content.replaceChild(newDiv, newOne) // kohne usul
newDiv.replaceWith(newOne); // muasir usul

// content.remove()

const updateBtn = document.querySelector(".update")
console.log(updateBtn);

let counter = 0


updateBtn.addEventListener("click", ()=>{
    console.log(counter++);
})
