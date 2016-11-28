<?php
   include('session.php');
?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">
   <head>
      <title>EKG 3000</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <script src="js/vendor/jquery.js"></script>
      <script src="js/vendor/jquery-ui.min.js"></script>
      <script src="js/vendor/bootstrap.min.js"></script>

      <link type="text/css" rel="stylesheet" href="css/rickshaw.css">
      <link type="text/css" rel="stylesheet" href="css/jquery-ui.min.css">
      <script src="js/vendor/d3.v3.js"></script> 
  <!--     <script src="js/vendor/d3.layout.min.js"></script>  -->
      <script src="js/vendor/rickshaw.js"></script>

      <script src="js/site.js"></script>
   </head>

   <body>
      <div class="container">
         <div class="row">
            <div class="col-sm-9">
               <h1>EKG3000</h1>
            </div>
            <div class="col-xs-2">
               <button type="button" class="btn btn-link pull-right"><a href = "logout.php">Sign Out</a></button>
            </div>
         </div>

         <div class="row">
            <div class="col-sm-1">
               <h4>Device:</h4>
            </div>
            <div class="col-sm-4">
               <select class="btn btn-primary dropdown-toggle col-xs-6" type="button" data-toggle="dropdown" id="ddDevices">
                  <option disabled selected value> Select.. </option>
               </select>
            </div>


            <div class="col-sm-1">
               <h4>File:</h4>
            </div>
            <div class="col-sm-4">
               <select class="btn btn-primary dropdown-toggle col-xs-6" type="button" data-toggle="dropdown" id="ddFiles">
                  <option disabled selected value> Select.. </option>
               </select>
            </div>


            <div class="col-sm-1">
               <button type="button" class="btn btn-primary pull-right" id="btLoad">Load File</button>
            </div>
         </div>


         <!-- Plot -->
         <div class="row">
         <div class="col-sm-1">
            <button type="button" class="btn btn-default">
               <span class="glyphicon glyphicon-menu-right"></span>
            </button>
         </div>
            <div class="col-sm-10">
              <div id="chart"></div>
              <div id="slider"></div>
            </div>
         </div>
      </div>
   </body>
</html>