<!--
 * config.php
 *
 * config for database
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 -->

<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'ekg');
   define('DB_PASSWORD', '83U}?nq}Nf;8!nk.');
   define('DB_DATABASE', 'login');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>