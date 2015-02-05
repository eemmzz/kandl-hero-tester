$(function() {
	$('#editHero').click(function(event) {
		var heroEditWrapper = $('.heroEditHolder');
		heroEditWrapper.fadeToggle();
		calculatePosition();
	});

	$('#closeHeroEditorCta').click(function() {
		var heroEditWrapper = $('.heroEditHolder');

		if(heroEditWrapper.is(":visible")) {
			heroEditWrapper.fadeOut();
		}
	});

	$('#heroTitleForm').submit(function(event) {
		event.preventDefault();

		var inputElement = $('#heroTitleInput');
		var titleElement = $('.titlePanel h2'); 
		var newTitle = inputElement.val().trim();
		var currentTitle = titleElement.html().trim();

		if (newTitle !== '' && newTitle != currentTitle) {
			titleElement.html(newTitle);
			inputElement.val('');
		}
	});

	$('.paletteOption').click(function(event) {
		var className = event.target.id;
		var titleElement = $('.titlePanel');

		if (!titleElement.hasClass(className)) {
			$('.titlePanel').attr('class', 'titlePanel');
			$('.titlePanel').addClass(className);
		}
	});

	$(window).resize(function() {
		calculatePosition();
	});

	var calculatePosition = function () {
		var heroEditWrapper = $('.heroEditHolder');
		var heroTitleText = $('.titlePanel');

		if(heroEditWrapper.is(":visible")) {
			var leftEdgeOfEditor = heroEditWrapper.position().left;
			var leftEdgeOfHero = heroTitleText.position().left;
			var offset = $('.editCta').height();
			var rightEdgeOfHero = leftEdgeOfHero + offset + heroTitleText.width();

			if (rightEdgeOfHero > leftEdgeOfEditor) {
				heroEditWrapper.css ({'top': heroTitleText.position().top + heroTitleText.height() + offset});
			}
			
			if (leftEdgeOfHero + heroEditWrapper.width() + heroTitleText.width() < window.innerWidth) {
				var heroTopEdge = $('#dropZone').position().top;
				heroEditWrapper.css ({'top': heroTopEdge});
			}
		}
	};
});
