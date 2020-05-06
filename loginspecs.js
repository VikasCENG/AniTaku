$(function() {
    $('.error').hide();
    $(".button").click(function() {
  
      // validate and process form here
      
      $('.error').hide();
      var uname = $("input#username").val();
      if (uname == "") {
        $("label#username_error").show();
        $("input#username").focus();
        return false;
      }
	  
	 var pass = $("input#password").val();
      if (pass == "") {
        $("label#password_error").show();
        $("input#password").focus();
        return false;
      }
	var passerror = $("input#password").val();
	if (checkPassword(passerror)==false){
		$("label#password2_error").show();
		$("label#password3_error").show();
		$("label#password4_error").show();
		$("label#password5_error").show();
        $("input#password").focus();
		return false;
	}
	
	var usercheck = $("input#username").val();
	if (inputAlphabet(usercheck)==false){
		$("label#username3_error").show();
        $("input#username").focus();
		return false;
	}
	
	var usererror = $("input#username").val();
	if (checkLettersNumbers(usererror)==false){
		$("label#username2_error").show();
        $("input#username").focus();
		return false;
	}
    });
  });
  
  function checkPassword(pwd){
	  var letter=false,number=false,special=false;
	  if (pwd.length<8) {
		return false;
	  }
	  for (x =0 ; x<pwd.length; x++){
		  if (pwd[x]<=16)
			  number=true;
		  if (pwd[x]>='a' && pwd[x]<='z' || pwd[x]>='A' && pwd[x]<='Z')
			  letter=true;
		  if(pwd[x]=='*' || pwd[x]=='!')
			  special=true;
	  }
	  if (letter==true&&number==true&&special==true)
		  return true;
	  
	  return false;
  }
  
function inputAlphabet(user){
	var letter1=false;
	  for (m =0 ; m<user.length; m++){
		  if (user[m]>='a' && user[m]<='z' || user[m]>='A' && user[m]<='Z')
			  letter1=true;
	  }
	  if (letter1==true)
		  return true;
	  
	  return false;
	  
  }
  

function checkLettersNumbers(word){
	var onlyletter=false,onlynumber=false;
	  for (y =0 ; y<word.length; y++){
		  if (word[y]>='a' && word[y]<='z' || word[y]>='A' && word[y]<='Z')
			  onlyletter=true;
		  if(word[y]== '0' && '9')
			  onlynumber=true;
	  }
	  if (onlyletter==true)
		  return true;
	  
	  return false;
  }
  

  
  
  
  