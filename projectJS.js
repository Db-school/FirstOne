

const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", (e) =>{
    e.preventDefault;
    document.getElementById("form").reset();
});
submitButton.addEventListener("click", (e) => {
    e.preventDefault;

    let emailField = document.getElementById("email");
    let userEmail = emailField.value; 
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(userEmail.match(regex)){
        createTable();
    }
    else{
       window.alert("Invalid email");
    }

    

});

function createTable(){
    let inputs = document.getElementsByTagName("input");

    pageContent = ("<html>\n<head>\n<title>Meal Plan</title>\n<style>\ntable {border-collapse: collapse; border-color: rgb(255, 211, 105); color: rgb(107,169,128);}\n");
    pageContent += ("td, th { border: 1px solid rgb(255, 211, 105);text-align: left; padding: 8px;}\ntr:nth-child(even) {background-color: rgb(67, 66, 66);}\n")
    pageContent += ("tr:nth-child(odd) {background-color: rgb(221, 221, 221);}\n</style>\n</head>\n<body>\n");
    pageContent += ("<table>\n<tr>\n<th>Day of Week</th>\n<th>Breakfast</th>\n<th>Snack</th>\n");
    pageContent += ("<th>Lunch</th>\n<th>Snack 2</th>\n<th>Dinner</th>\n </tr>\n");
    pageContent += ("<tr>\n<td>Monday</td>\n <td>" + inputs[0].value + "</td>\n<td>" + inputs[1].value + "</td>\n");
    pageContent += ("<td>" + inputs[2].value + "</td>\n<td>" + inputs[3].value + "</td>\n <td>" + inputs[4].value + "</td>\n");
    pageContent += ("<tr>\n<td>Tuesday</td>\n <td>" + inputs[5].value + "</td>\n<td>" + inputs[6].value + "</td>\n");
    pageContent += ("<td>" + inputs[7].value + "</td>\n<td>" + inputs[8].value + "</td>\n <td>" + inputs[9].value + "</td>\n");
    pageContent += ("<tr>\n<td>Wednesday</td>\n <td>" + inputs[10].value + "</td>\n<td>" + inputs[11].value + "</td>\n");
    pageContent += ("<td>" + inputs[12].value + "</td>\n<td>" + inputs[13].value + "</td>\n <td>" + inputs[14].value + "</td>\n");
    pageContent += ("<tr>\n<td>Thurday</td>\n <td>" + inputs[15].value + "</td>\n<td>" + inputs[16].value + "</td>\n");
    pageContent += ("<td>" + inputs[17].value + "</td>\n<td>" + inputs[18].value + "</td>\n <td>" + inputs[19].value + "</td>\n");
    pageContent += ("<tr>\n<td>Friday</td>\n <td>" + inputs[20].value + "</td>\n<td>" + inputs[21].value + "</td>\n");
    pageContent += ("<td>" + inputs[22].value + "</td>\n<td>" + inputs[23].value + "</td>\n <td>" + inputs[24].value + "</td>\n");
    pageContent += ("<tr>\n<td>Satuday</td>\n <td>" + inputs[25].value + "</td>\n<td>" + inputs[26].value + "</td>\n");
    pageContent += ("<td>" + inputs[27].value + "</td>\n<td>" + inputs[28].value + "</td>\n <td>" + inputs[29].value + "</td>\n");
    pageContent += ("<tr>\n<td>Sunday</td>\n <td>" + inputs[30].value + "</td>\n<td>" + inputs[31].value + "</td>\n");
    pageContent += ("<td>" + inputs[32].value + "</td>\n<td>" + inputs[33].value + "</td>\n <td>" + inputs[34].value + "</td>\n</table>\n");
    pageContent += ("<button onclick= \"window.print()\" type=\"button\">Print/Download</button>\n</body>\n</html>"); 
    
    newPage = window.open('', '');
    newPage.document.write(pageContent);
    

    
      
   
    
        
       
        
        
        
       
   
}