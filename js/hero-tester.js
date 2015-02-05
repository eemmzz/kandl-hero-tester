$(function() {
	$('a.heroOption').click(function(event) {
		var option = event.target.id;
		var heroArea = $('#dropZone');
		
		if(!heroArea.hasClass(option)) {
			heroArea.attr('class', option);
		}
	});
});
