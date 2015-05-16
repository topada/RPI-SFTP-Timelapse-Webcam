<?php
	$fa = [];
	$p = "data/";
	foreach (new DirectoryIterator($p) as $f)
	{
	    if($f->isDot()) continue;
	    $fname =  $p.$f->getFilename();
	    array_push($fa, $fname);
	}
	sort($fa);
	echo json_encode($fa);
?>