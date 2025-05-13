$(document).ready(function(){
	var elem = $("#virtual-frame");
	var offset = elem.offset();
	var top = offset.top;
	
	$('.virtual-div').click(function(){
		console.log(top);
		$("body").animate({scrollTop:top}, '500', 'swing');
	})

});                