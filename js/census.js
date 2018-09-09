var changeImage = function() {
	var sourceUrl = document.getElementById('graph').src;
	if (sourceUrl.indexOf('timeline_1.png') !== -1) {
		document.getElementById('graph').src = '/images/timeline_2.png';
	} else if (sourceUrl.indexOf('timeline_2.png') !== -1) {
		document.getElementById('graph').src = '/images/timeline_1.png';
	}
	
}