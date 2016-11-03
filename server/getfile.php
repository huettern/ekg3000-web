<?php
$file_id = ($_GET['file_id']);

$con = mysqli_connect('localhost','ekg3000','ekg3000','ekg3000');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ekg3000");

if(!empty($file_id)) {
	$sql="SELECT * FROM dataset WHERE id = '".$file_id."'";
}
else {
    die('Too few input arguments');
}

$result = mysqli_query($con,$sql);	

$row = mysqli_fetch_array($result);

// echo readfile($row['file']);

set_time_limit(0);
$file = @fopen($row['file'],"rb");
while(!feof($file))
{
	print(@fread($file, 1024*8));
	ob_flush();
	flush();
}

mysqli_close($con);
?>