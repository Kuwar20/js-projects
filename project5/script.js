const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
// to store the data in the browser
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); // it will store whatever is there in the notesContainer
}

{/* 
<div class="notes-container">
        <p contenteditable="true" class="input-box">
        <img src="images/delete.png">
        </p> 
</div>
*/}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");  // create a p element and store it in inputBox
    let img = document.createElement("img"); // create a img element and store it in img
    inputBox.className = "input-box"; // give class name to inputBox/ p element
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note1 => {
            note1.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
