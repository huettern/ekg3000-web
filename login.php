<!--
 * login.php
 *
 * login page for EKG3000
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 -->

<?php
include("config.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // username and password sent from form 
    
    $myusername = mysqli_real_escape_string($db, $_POST['username']);
    $mypassword = mysqli_real_escape_string($db, $_POST['password']);
    
    
    $sql    = "SELECT id FROM login WHERE username = '$myusername' and password = '$mypassword'";
    $result = mysqli_query($db, $sql);
    $row    = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $active = $row['active'];
    
    $count = mysqli_num_rows($result);
    
    // If result matched $myusername and $mypassword, table row must be 1 row
    
    if ($count == 1) {
        $_SESSION['login_user'] = $myusername;
        
        header("location: index.php");
    } else {
        $error = "Your Login Name or Password is invalid";
    }
}
?>

<html>
   <head>
      <title>Login Page</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="css/bootstrap.css">
      <link type="text/css" rel="stylesheet" href="css/login_bootsnipp.css">
      <link type="text/css" rel="stylesheet" href="css/jquery-ui.min.css">
      <script src="js/vendor/jquery.js"></script>
      <script src="js/vendor/jquery-ui.min.js"></script>
      <script src="js/vendor/bootstrap.js"></script>
   </head>
   <body bgcolor = "#FFFFFF">
	<div class="row">
         <div class="row">
		 <div class="col-md-4"></div>
		 <div class="col-md-4">
               <div class="form-login">
                  <h4>Welcome to EKG3000</h4>
                  <form action="" method="post">
                     <input type="text" name="username" class="form-control input-sm chat-input" placeholder="username" />
                     </br>
                     <input type="password" name="password" class="form-control input-sm chat-input" placeholder="password" />
                     </br>
                     <div class="wrapper">
                        <span  class="group-btn">
                        <button type = "submit" value = "Submit" class="btn btn-primary btn-md">Login</button></br>
                        </span>
                     </div>
                  </form>
                  <div style = "font-size:11px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
               </div>
               
     <div class="col-md-4"></div>
            </div>
         </div>
      </div>
   </body>
</html>
