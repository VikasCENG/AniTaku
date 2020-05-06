<!DOCTYPE HTML>
<html>
<head>
<title>Contacts</title>
<style>
 .error {color:#FF0000;}
</style>
</head>
<body>
<h2>Contact</h2>
<?php
	//define variables and set to empty values
	 $nameErr = $emailErr = $genderErr = $loginErr = "";
	 $name = $email = $gender = $comment = $website = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {


		 if (empty($_POST["uname"])) {
			$unameErr = "Name is required";
		  } else {
			$uname = test_input($_POST["uname"]);  
		  }

		  if (empty($_POST["password"])) {
			$passErr = "Password is required";
		  } else {
			$password = test_input($_POST["password"]); 
		  }




		//continues to target page if all validation is passed
		if ( $unameErr ==""&& $passErr ==""){
			// check if exists in database
			$dbc=mysqli_connect('localhost','testuser','password','loginexample')
			or die("Could not Connect!\n");
			$hashpass=hash('sha256',$password);
			$sql="SELECT * from profiles WHERE username ='$uname' AND password='$hashpass';";
			$result =mysqli_Query($dbc,$sql) or die (" Error querying database");
			$a=mysqli_num_rows($result);

			if ($a===0){
				$loginErr="Invalid username or password";
			}else{ 
				header('Location: /login/success.html');
			}
		}
	}

       // clears spaces etc to prep data for testing
	function test_input($data){
		$data=trim ($data); // gets rid of extra spaces befor and after
		$data=stripslashes($data); //gets rid of any slashes
		$data=htmlspecialchars($data); //converts any symbols usch as < and > to special characters
		return $data;
	}

?>
<h2> PHP form Validation example </h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

	User Name: <input type="text" name="uname" value="<?php echo $uname;?>"/>
	<span class="error">* <?php echo $unameErr;?></span>
	<br/><br/>
	Password:
	<input type="text" name="password" value=""/>
	<span class="error">* <?php echo $passErr;?></span>
	<br/><br/>
	<span class="error">* <?php echo $loginErr;?></span>

	<input type="submit" name="submit" value="Login"/> 
</form>

</html>
