$(function() {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	} else {
	  document.getElementById("dropZone").innerHTML ='Sorry but your browser does not support the cool feature on this site :('; 
	}
	
	window.addEventListener("dragover",function(e){
	  e = e || event;
	  e.preventDefault();
	},false);
	window.addEventListener("drop",function(e){
	  e = e || event;
	  e.preventDefault();
	},false);

	var classId = 0;
	var drop = document.getElementById('dropZone');
	drop.addEventListener("drop", function(e) {
		var dt = e.dataTransfer;
		var files = dt.files;
		for (var i=0; i<files.length; i++) {
			var file = files[i];
			var reader = new FileReader();

			reader.addEventListener("loadend", function(e, file) {
				var bin = this.result;
				var img = document.getElementById("dropZone");

				$("#dropZone").css("background-image", "url('" + bin + "')")
			});

			reader.readAsDataURL(file);
		}
	});
});
