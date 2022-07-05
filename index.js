// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",studentDetails);

function studentDetails(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var batch=document.querySelector("#batch").value;
    var dsa=document.querySelector("#dsa").value;
    dsa=+dsa;
    var cs=document.querySelector("#cs").value;
    cs=+cs;
    var coding=document.querySelector("#coding").value;
    coding=+coding;
    var percentage=(((dsa+cs+coding)/30)*100).toFixed(2);
    
    var status;
    if(percentage>50){
        status="Regular";
    }
    else{
        status="Async";
    }

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;
    var td2=document.createElement("td");
    td2.innerText=batch;
    var td3=document.createElement("td");
    td3.innerText=dsa;
    var td4=document.createElement("td");
    td4.innerText=cs;
    var td5=document.createElement("td");
    td5.innerText=coding;
    var td6=document.createElement("td");
    td6.innerText=percentage;
    var td7=document.createElement("td");
    td7.innerText=status;
    var td8=document.createElement("td");
    td8.innerText="Delete";
    td8.style.color="red";
    td8.addEventListener("click",deleteRow);
    
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("thead").append(tr);
}

function deleteRow(){
    event.target.parentNode.remove()
}