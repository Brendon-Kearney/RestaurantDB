//alert("alert hello")

//const { render } = require("ejs")

const divRest=document.querySelector("#divRest")
const btnRest=document.querySelector("#btnRest")
const h2Name = document.querySelector("#h2Name")
const h2Address = document.querySelector("#h2Address")
const h2Borough = document.querySelector("#h2Borough")
const h2ZipCode = document.querySelector("#h2ZipCode")
const tGrades = document.querySelector("#tGrades")

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
    
    data.grades.forEach(grades =>{
    
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        td.innerText = grades.date
        td2.innerText = grades.grade
        td3.innerText = grades.score
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tGrades.appendChild(tr)
    })

    console.log(data.address.zipcode);
    
}