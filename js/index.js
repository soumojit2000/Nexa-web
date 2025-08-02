//input fields
const mail=document.getElementById('mail_ph');
const pwd=document.getElementById('pwd');
const cnfrm_pwd= document.getElementById("cnfrm_pwd");

//error fields
const mailErr=document.querySelector('.mailErr');
const pwdErr=document.querySelector('.pwdErr');
const cnfrmErr=document.querySelector('.cnfrmErr');


mail.addEventListener('input', mailCheck)
pwd.addEventListener('input',pwdCheck)
cnfrm_pwd.addEventListener('input',cnfrmCheck)

function mailCheck()
{
    let data=mail.value;
    // console.log("Mail:",data);

    if (data.length<1){
        mailErr.innerHTML = "*Required field";
    }
    else if (data.length<10){
        mailErr.innerHTML = "*minimum 10 characters required";
    }
    else{
        mailErr.innerHTML = "";
    }
}

function pwdCheck()
{
   let data=pwd.value;
   //console.log("Password:",data);

   if(data.length<1){
    pwdErr.innerHTML = "*Required field";
   }
   else if(data.length<8){
    pwdErr.innerHTML="*minimum 8 characters required";
   }
   else if (data.length>15){
    pwdErr.innerHTML="maximum 15 characters allowed";
   }
   else {
    pwdErr.innerHTML="";
   }
}

function cnfrmCheck()
{
let password=pwd.value;
let confirmPassword=cnfrm_pwd.value;

    if(confirmPassword.length<1){
        cnfrmErr.innerHTML="*Required field";
    }
    else if(password===confirmPassword){
        cnfrmErr.innerHTML="";
    }
    else{
        cnfrmErr.innerHTML="*Passwords do not match";
    }
}