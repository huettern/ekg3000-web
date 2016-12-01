<?php
   include('session.php');
?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">
   <head>
      <title>EKG 3000</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="css/bootstrap.css">
      <link type="text/css" rel="stylesheet" href="css/rickshaw.css">
      <link type="text/css" rel="stylesheet" href="css/jquery-ui.min.css">

      <script src="js/vendor/jquery.js"></script>
      <script src="js/vendor/jquery-ui.min.js"></script>
      <script src="js/vendor/bootstrap.js"></script>
      <script src="js/vendor/d3.v3.js"></script> 
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
               <input type="text" class="form-control input-sm chat-input" id="timePeriode" placeholder="set graph time periode" />
            </div>


            <div class="col-md-2">
               <button type="button" class="btn btn-primary btn-block" id="btLoad">Load File
                  <span class="glyphicon glyphicon-cloud-download" aria-hidden="true"></span>
               </button>
            </div>
         </div>

         </br>
<!--          <div class="row">
            <div class="col-md-5">
               <button type="button" class="btn btn-primary btn-block" id="btPrev">Previous</button>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
               <button type="button" class="btn btn-primary btn-block" id="btNext">Next</button>
            </div>
         </div> -->

         <!-- Plot -->
         <div class="row">
            <div class="col-md-1">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: block; width: 100%; height: 640px;">
                        <button type="button" class="btn btn-primary center" style="display: block; width: 100%; height:100%"; id="btPrev">
                           <span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-md-10">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: block; height: 500px;" id="chartContainer">
                        <div style="width: 100%; height: 100%;" id="chart"></div>
                     </div>
                  </div>
                  <div class="panel-body">
                     <div style="display: block; height: 50px;" id="sliderContainer">
                        <div style="width: 100%; height: 100%;" id="slider"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-md-1">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: center-block; width: 100%; height: 640px;">
                        <button type="button" class="btn btn-primary center" style="display: block; width: 100%; height:100%"; id="btNext">
                           <span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
                           </button>
<!--                         <a class="btn btn-block btn-primary" style="display: block; width: 100%; height:100%;>
                           <span class="glyphicon glyphicon-share" style="font-size: 300px;">LIRA</span>
                        </a> -->
                     </div>
                  </div>
               </div>
            </div>


<!--          <div class="row">
            <div class="col-md-10">
               <div class="panel-default">
                  <div class="panel-body">
                     <div style="display: block; height: 50px;" id="sliderContainer">
                        <div style="width: 100%; height: 100%;" id="slider"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div> -->


         <!-- Plot -->
<!--          <div class="row">
            <div class="col-md-12">
              <div class="btn-block" id="slider"></div>
            </div>
         </div> -->


      </div>
   </body>
</html>