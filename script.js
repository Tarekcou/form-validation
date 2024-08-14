let nameError= document.getElementById("name-error")
let phoneError= document.getElementById("phone-error")
let emailError= document.getElementById("email-error")
let messageError= document.getElementById("message-error")
let submitError= document.getElementById("submit-error")


function validateName(){
  let name= document.getElementById("contact-name").value;

  if(name.length==0){
    nameError.innerHTML="Name is required";
return false
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Write full Name";
return false
  }
  nameError.innerHTML="Valid"
  return true;
}


function validatePhone(){
  let phone= document.getElementById("contact-phone").value;

  if(phone.length==0){
    phoneError.innerHTML="phone no is required";
    return false
  }
   if(phone.length!=10){
    phoneError.innerHTML="phone no should be 10";
    return false
  }
  //  if(phone.match(/^[0-9]{10}$/)){
  //   phoneError.innerHTML="phone no is required";
  //   return false
  // }
  phoneError.innerHTML="valid Phone"
  return true
}

function validateEmail()
{
  let email= document.getElementById("contact-email").value;

  if(email.length==0)
    {
      emailError.innerHTML="email is required"
      return false;
    }
  if(!email.contains("@")){
    emailError.innerHTML="not valid email"
      return false;
  }
  emailError.innerHTML="valid"
      return true;

}


function onSubmit()
{
  if(!validateName() && !validateEmail() && !validatePhone())
    {
      submitError.innerHTML="not valid form"
      setTimeout(() => {
        submitError.style.display="none"
      }, 3000);
      return false;
    }

    submitError.innerHTML="valid Form";
    console.log(validateName, validateEmail,validatePhone)
    return true


}
