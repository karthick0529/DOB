var parent_div = document.createElement("div");
parent_div.className = "main";

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML = "Search";
button.addEventListener("click",display);

parent_div.append(input_date,button);
document.body.append(parent_div);

function display(){
    var input = document.getElementById("dob").value;
    var input_date = new Date(input);
    var current_date = new Date();
    console.log(`${input_date},${current_date}`);
    var millidiff = parseInt(current_date.getTime()) - parseInt(input_date.getTime());
    console.log(millidiff);
    var secdiff = Math.floor(millidiff/1000);
    console.log(secdiff);
    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);
    var hourdiff = Math.floor(mindiff/60);
    console.log(hourdiff);
    var daydiff = Math.floor(hourdiff/24);
    console.log(daydiff);
    var yeardiff = current_date.getFullYear() - input_date.getFullYear();
    console.log(yeardiff);
    var mondiff = (yeardiff*2)+(current_date.getMonth() - input_date.getMonth());
    console.log(mondiff);

    var outputdiv = document.createElement("div");
    outputdiv.innerHTML = `
    The Current date: ${current_date}<br>
    Years: ${yeardiff}<br>
    Months: ${mondiff}<br>
    Days: ${daydiff}<br>
    Hours: ${hourdiff}<br>
    Minutes: ${mindiff}<br>
    Seconds: ${secdiff}<br>
    Milliseconds: ${millidiff}
    `;
    document.body.appendChild(outputdiv);

}

