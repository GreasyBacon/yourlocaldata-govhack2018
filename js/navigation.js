goTo = function(location) {
    languageCode = getLanguage();
    switch(location) {
	    case 'index':
	        window.location = 'index.' + languageCode + '.html';
	        break;
        case 'resident':
        	window.location = 'index.' + languageCode + '.html';
        	break;
    	case 'visitor':
    		window.location = 'visitor.' + languageCode + '.html';
    		break;
	    case 'about':
	        window.location = 'about.' + languageCode + '.html';
	        break;
        case 'on_this_day':
        	window.location = 'on_this_day.' + languageCode + '.html';
        	break;
        case 'council':
            window.location = 'council.' + languageCode + '.html';
            break;
    	case 'sports':
    		window.location = 'sports.' + languageCode + '.html';
    		break;
    	case 'census':
    		window.location = 'census.' + languageCode + '.html';
    		break;
    	case 'afl':
    		window.location = 'afl.' + languageCode + '.html';
    		break;
        case 'events':
            window.location = 'events.' + languageCode + '.html';
            break;
	    default:
	        window.location = 'index.' + languageCode + '.html';
	        break;
	}
}

getLanguage = function() {
    name = "language="
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "en";
}