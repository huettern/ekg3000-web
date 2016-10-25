<?php
$dev = ($_GET['dev']);
$dev_id = ($_GET['dev_id']);

$con = mysqli_connect('localhost','ekg3000','ekg3000','ekg3000');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ekg3000");

if(!empty($dev_id)) {
	$sql="SELECT * FROM dataset WHERE dev_id = '".$dev_id."'";
}
else if (!empty($dev)) {
	$sql="SELECT * FROM dataset WHERE device = '".$dev."'";
}
else {
    die('Too few input arguments');
}

$result = mysqli_query($con,$sql);	

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);


mysqli_close($con);
?>