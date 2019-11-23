function grossPay(hrs) {
    var gross;
    if (hrs <= 40) {
        gross = 15*hrs;
    }
    else {
        gross = (40*15)+((hrs-40)*22.5)
    }
    return parseFloat(gross)
}

function build() {
    var emp = [];
    var i = 1;

    while(true) {
        var hrs = prompt("Enter number of hours for Employee#"+i+": ", 0);
        hrs = parseInt(hrs);
        if(hrs === -1){
            break;
        }
        emp.push(hrs);
        i++;
    }
    document.write("<table border=1 align='center'>");
    document.write("<tr>");
    document.write("<th>Employee #</th>");
    document.write("<th>Hours Worked</th>");
    document.write("<th>Gross Pay</th>");
    document.write("</tr>");

    for(i=0;i<emp.length;i++) {
        document.write("<tr>");
        document.write("<td>"+(i+1)+"</td>");
        document.write("<td>"+emp[i]+"</td>");
        document.write("<td>$"+grossPay(emp[i])+"</td>");
        document.write("</tr>");
    }
}