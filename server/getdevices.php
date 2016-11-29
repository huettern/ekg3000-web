<?php

$con = mysqli_connect('localhost','ekg3000','n4O13YsX1wn686hk','ekg3000');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ekg3000");
$sql="SELECT * FROM devices";
$result = mysqli_query($con,$sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);

mysqli_close($con);
?>
