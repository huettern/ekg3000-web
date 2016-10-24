<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$dev = ($_GET['dev']);

$con = mysqli_connect('localhost','ekg3000','ekg3000','ekg3000');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ekg3000");
$sql="SELECT * FROM dataset WHERE id = '".$dev."'";
// $sql="SELECT * from dataset";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
    echo $row['file'];
}


mysqli_close($con);
?>
</body>
</html>
