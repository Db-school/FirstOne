

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
        console.log(userEmail);
    }
    else{
        console.log("Invalid email!");
    }

    

})