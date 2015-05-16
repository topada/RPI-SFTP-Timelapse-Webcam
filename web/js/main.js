var d_refresh = 60; // refresh frames every x seconds
var fps = 1 // frames per second

var frames = null; // total frames in data directory (async updated via ajax > PHP)
var images = []; // image array
var i = 0;
var d = 0;
var stop = false;


function cycle_images()
{
	if(frames)
	{
		i = (i < frames-1) ? i + 1 : 0;
		$('#screen').attr("src", images[i].src);	
	}
	else
	{
		$('#screen').attr("src", "img/none.jpg");
	}	
}

function refresh()
{	
	if(d > 0) { d-- }
	else
	{
		console.log ("-- refresh");
		d = d_refresh;
		clearInterval(i_cycle);
		update();
		i_cycle = setInterval(cycle_images, Math.round((1000 / fps)));	
	}
	$("#refresh").text(d);	
	
}

function update()
{	
	console.log ("-- update");
	
	$.ajax({
            url: "async.update.php",
            dataType: "json",
            success: function (data)
            {     
	        	frames = data.length;
	        	$('#frames').text(frames).fadeIn(200);
	            
                $.each(data, function(i, filename)
                {
                    images[i] = new Image();
                    images[i].src = filename;
                });                
            }
       });
}

function updatefps()
{	
	fps = $( "#fps" ).slider("value");
	$("#fps_label").text(fps);
	clearInterval(i_cycle);
	i_cycle = setInterval(cycle_images, Math.round((1000 / fps)));
	
	console.log ("-- updatefps("+fps+")");
}

/* init */
update();


/* ready */
$(document).ready(function()
{
	i_refresh = setInterval(refresh, 1000);
	i_cycle = setInterval(cycle_images, Math.round((1000 / fps)));
	
    $('#screen').click(function()
    {
	    if(!stop)
	    {
		    console.log ("-- stop");
			$(this).addClass("hover");
			clearInterval(i_refresh);
			clearInterval(i_cycle); 
			stop = true;  
	    }
	    else
	    {
		    console.log ("-- start");
	   		$(this).removeClass("hover");
	   		i_refresh = setInterval(refresh, 1000);
	   		i_cycle = setInterval(cycle_images, Math.round((1000 / fps)));
	   		stop = false;    
	    }
    });
    
    $("#fps").slider({
	  orientation: "horizontal",
      min: 1,
      max: 25,
      value: 1,
      slide: updatefps,
      change: updatefps
    })
    
});