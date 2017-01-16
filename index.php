<!--
 * index.php
 *
 * main window for the website
 *
 * @author     Stocker Jan
 * @Date       01.12.2016
 * @copyright  FHNW 2016 (EKG3000)
 * @version    1.0
 -->

<?php
   include('session.php');
?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">
   <head>
      <title>EKG3000</title>
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
      </br>
      <div class="container">
         <div class="row">
            <div class="col-md-10">
               <h1>EKG3000</h1>
            </div>
            <div class="col-sm-2">
               <button type="button" class="btn btn-default btn-sm pull-right">
               <span class="glyphicon glyphicon-log-out"></span><a href = "logout.php"> Sign Out </a>
               </button>
            </div>
         </div>

         <div class="row">
            <div class="col-md-3">
               <select class="btn btn-primary dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="ddDevices">
                  <option disabled selected value> Device Select.. </option>
               </select>
            </div>
            <div class="col-md-3">
               <select class="btn btn-primary dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="ddFiles">
                  <option disabled selected value> File Select.. </option>
               </select>
            </div>
            <div class="col-md-2 col-md-offset-2 text-right">
               <h4>Time Range</h4>  
            </div>
            <div class="col-md-2">
               <input type="text" class="form-control input-sm chat-input" id="timeRange" value="10"/>
            </div>
         </div>
         </br>
         
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>