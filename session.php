<!--
 * session.php
 *
 * look up for login
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 -->

<?php
   include('config.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($db,"select username from admin where username = '$user_check' ");
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['username'];
   
   if(!isset($_SESSION['login_user'])){
      header("location:login.php");
   }
?>