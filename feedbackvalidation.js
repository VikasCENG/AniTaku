
$(function() {
    $('.error').hide();
    $(".button").click(function() {
      // validate and process form here
      
      $('.error').hide();
      var fname = $("input#firstname").val();
      if (fname == "") {
        $("label#fname_error").show();
        $("input#firstname").focus();
        return false;
      }
	  
	  if (checkNoNumbers(fname,"abc","def")==false){
		  $("label#fname_error2").show();
          $("input#firstname").focus();
        return false;
	  }
	  
	  var lname = $("input#lastname").val();
     if (lname == "") {
        $("label#lname_error").show();
        $("input#lastname").focus();
        return false;
      }
	  if (checkNoNumbers(lname)==false){
		  $("label#lname_error2").show();
          $("input#lastname").focus();
        return false;
	  }
	  
    var email = $("input#email").val();
    if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
      }
	return true;
    });
  });

  function checkNoNumbers(word){
	  for ( x=0; x< word.length;x++){
		  if (word[x]>=0 && word[x]<=9)
			  return false;
	  }
	  return true;  
  }
