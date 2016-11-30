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
      <link rel="stylesheet" href="css/style.css">
      <script src="js/vendor/d3.v3.js"></script> 
  <!--     <script src="js/vendor/d3.layout.min.js"></script>  -->
      <script src="js/vendor/rickshaw.js"></script>

      <script src="js/site.js"></script>
   </head>

   <body>
      <div class="container">
         <div class="row">
            <div class="col-md-10">
               <h1>EKG3000</h1>
            </div>
            <div class="col-sm-2">
               <button type="button" class="btn btn-link pull-right"><a href = "logout.php">Sign Out</a></button>
            </div>
         </div>

         <div class="row">
<!--             <div class="col-md-1">
               <h4>Device:</h4>
            </div> -->
            <div class="col-md-3">
               <select class="btn btn-primary dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="ddDevices">
                  <option disabled selected value> Device Select.. </option>
               </select>
            </div>


<!--             <div class="col-md-1">
               <h4>File:</h4>
            </div> -->
            <div class="col-md-3">
               <select class="btn btn-primary dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="ddFiles">
                  <option disabled selected value> File Select.. </option>
               </select>
            </div>

            <div class="col-md-2">
               <button type="button" class="btn btn-primary btn-block" id="btLoad">Load File</button>
            </div>
         </div>

         </br>
         <div class="row">
            <div class="col-md-5">
               <button type="button" class="btn btn-primary btn-block" id="btPrev">Previous</button>
            </div>
            <div class="col-md-2">   
            </div>
            <div class="col-md-5">
               <button type="button" class="btn btn-primary btn-block" id="btNext">Next</button>
            </div>
         </div>

         <!-- Plot -->
         <div class="row">
            <div class="col-md-12">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: block; height: 500px;" id="chartContainer">
                        <div style="width: 100%; height: 100%;" id="chart"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-12">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: block; height: 50px;">
                        <div style="width: 100%; height: 100%;" id="slider"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <!-- Plot -->
<!--          <div class="row">
            <div class="col-md-12">
              <div class="btn-block" id="slider"></div>
            </div>
         </div> -->


      </div>
   </body>
</html>