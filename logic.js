const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent="This is the glorious text-content!";

container.appendChild(content);

const pEle = document.createElement("p");
pEle.textContent="Hey I'm red!";
container.appendChild(pEle);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello, World!");


function alertFunction(){
    alert("Function made!");
}
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertFunction);
