function validation(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 4){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }