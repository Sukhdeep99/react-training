for (d = 1; d <= 31; d++) {
    var optn = document.createElement("OPTION");
    optn.text = d;
    optn.value = d;

    document.getElementById('date').options.add(optn);
}

var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for (m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = monthArray[m];
    optn.value = m;

    document.getElementById('month').options.add(optn);
}

let today = new Date();
let dt = today.getDate();
let yt = today.getFullYear();
let mt = today.getMonth();

for (y = 1935; y <= yt; y++) {
    var optn = document.createElement("OPTION");
    optn.text = y;
    optn.value = y;

    document.getElementById('year').options.add(optn);
}

function ageCalc(){
    let y = document.getElementById('year').value
    let m = document.getElementById('month').value
    let d = document.getElementById('date').value     
    
    if ((yt - y < 13) || (((yt - y) === 13) && ((mt - m) < 0)) || (((yt - y) === 13) && ((mt - m) === 0) && ((dt - d) < 0))) {
        document.getElementById('failed').innerHTML = '<label id="failed" style="color:red;">* The Age is less than 13</label>';
    } else {
        document.getElementById('failed').innerHTML = '<label id="failed" style="color:green;">operation sucessful</label>';
    }
}

document.getElementById('submit').onclick = ageCalc;