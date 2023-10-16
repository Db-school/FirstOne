    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
        var submitButton = document.querySelector("button");
        submitButton.addEventListener("submit", submissionCheck());
        var currentInput = "";

        function submissionCheck(){
          //let inputField = document.getElementById("inputField");
          let userInput = document.getElementById("inputField").addEventListener("input", getValue);
          const regx = /[0-9a-zA-Z]+/; 
          if(regx.test(currentInput) == true){
            window.alert("Submission successful!");
          }
          else{
            window.alert("Error: Invalid entry");
          }
         
        }
        function getValue(){
          currentInput = this.value;

        }
       
        
