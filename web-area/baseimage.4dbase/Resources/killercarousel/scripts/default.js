function preventBodyDrop(){
	//prevent page move by drag and drop
	document.body.addEventListener('dragover', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
	document.body.addEventListener('drop', function(e){
		e.stopPropagation();
		e.preventDefault();
	});
}
	
function invokeObjectMethod(id,path){
	
	window.location = "webarea://" + id + "/" + path;
	
}

function setupCarousel(){
	$('.kc-wrap').KillerCarousel({
		// Default natural width of carousel.
		width: 800,
		// Item spacing in 3d (has CSS3 3d) mode.
		spacing3d: 120,
		// Item spacing in 2d (no CSS3 3d) mode. 
		spacing2d: 120,
		showShadow: true,
		showReflection: true,
		// Looping mode.
		infiniteLoop: true,
		// Scale at 75% of parent element.
		autoScale: 75
	});
}

function setPaintings(param){
	for( var index = 0; index < param.paintings.length; ++index)
	{
		var p = param.paintings[index];
		var elem = document.getElementById(p.id);
		if(elem){
			elem.alt = p.alt;
			elem.src = p.src;
		}
	}
}