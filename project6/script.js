let userInput = document.getElementById("date")
// first we select the date element
// then make a condition that it select only the current date or previous date
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

//fn to calculate the age
function calculateAge(){
    if (!userInput.value) {  // if the user doesn't select any date then it will show an alert
        alert('Please select a date');
        return;
    }
    let bday = new Date(userInput.value);   // bday will store the date of birth

    let d1 = bday.getDate(); // d1 will store the date
    let m1 = bday.getMonth()+1; // m1 will store the month
    let y1 = bday.getFullYear(); // y1 will store the year

    let today = new Date(); // today will store the current date

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3, m3, y3; // they will store the date difference between the current date and date of birth
    
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
            y3--;
            m3 = 11;
    }
    //console.log(y3 + " years " + m3 + " months " + d3 + " days ");
    result.innerHTML = ` Your age is <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}