const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const AddTask = () => {  // function AddTask() {    // we can also use this as function

    if (inputBox.value === '') {

        /* give a broswer alert
        alert("Please enter a task");  */

        /*  to get a better alert we use sweetalert
        first we have to link the sweetalert cdn in the html file
         then we can use it here */
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a task',
        });
    } else {
        // Create a new list item, set its content, and append it to the list container
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Create a delete button (span) and append it to the list item
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    
    // Call the storeData function to save the updated list in local storage
    storeData(); // we call it everytime we add a task
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        storeData(); // we call it everytime we toggle the task
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = 'none';
        storeData(); // we call it everytime we delete the task
    }
});


// store the input value in a browser so that 
// even after reloading the tasks dont disappear
function storeData() {
    localStorage.setItem('listContainer-data', listContainer.innerHTML);
}

//now we have to display the tasks even after reloading the page
function getData() {
    listContainer.innerHTML = localStorage.getItem('listContainer-data');
}
getData();