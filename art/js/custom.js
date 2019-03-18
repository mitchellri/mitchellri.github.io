$(document).ready(function(){
	$(".filter").click(function(e){
		e.preventDefault();
		var filter = $(this).data('filter');
		if (filter == null) $(".img").show();
		else {
			$(".img").hide();
			$('.' + filter).show();
			new WOW().init();
		}
	});
});