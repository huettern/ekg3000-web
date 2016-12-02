<!--
 * logout.php
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 -->

<?php
   session_start();
   
   if(session_destroy()) {
      header("Location: login.php");
   }
?>