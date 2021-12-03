//alert("alert hello")

//const { render } = require("ejs")

const divRest=document.querySelector("#divRest")
const btnRest=document.querySelector("#btnRest")
const h2Name = document.querySelector("#h2Name")
const h2Address = document.querySelector("#h2Address")
const h2Borough = document.querySelector("#h2Borough")
const h2ZipCode = document.querySelector("#h2ZipCode")
const pGrades0 = document.querySelector("#pGrades")

btnRest.onclick = ()=>{
    fetch("restaurant")
    .then(response => response.json())
    .then(data => render(data))
    .catch(error=>alert(error))

}

function render(data)
{
    //divRest.innerText = JSON.stringify(data)
    h2Name.innerText = data.name;
    h2Address.innerText = data.address.building + " " + data.address.street + ",";
    h2Borough.innerText = data.borough + ",";
    h2ZipCode.innerText = data.address.zipcode + " ";
    //pGrades0.innerText = data.grades[0].date + " " + data.grades[0].grade + " " + data.grades[0].score;
    data.forEach(grades =>{
        let tr = document.createElement("tr")
        let tr = document.createElement("td")
        td.innerText = grades.date
        tr.appendChild(td)
        pGrades.appendChild(tr)
    })

    console.log(data.address.zipcode);
    
}