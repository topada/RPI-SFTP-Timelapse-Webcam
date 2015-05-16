<!doctype html>
<html class="no-js" lang="de">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>slime cam</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
   
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="container">
	    <div class="row">
		    <div id="img_container" class="col-sm-6 col-md-push-3">
			    <img id="screen" class="img-responsive" src='img/none.jpg'>
			    <p>frames loaded <strong><span class="bold" id="frames">0</span></strong></p>
			    <p>refresh in <strong><span class="bold" id="refresh">60</span> s</strong></p>
			    
				<p>frames per second <strong><span class="bold" id="fps_label">1</span> fps</strong></p>
				<div id="fps"></div>
		    </div>
	    </div>
    </div>

    </div> <!-- /container -->
    	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
    </body>
</html>
