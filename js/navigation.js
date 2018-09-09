goTo = function(location) {
    switch(location) {
	    case 'index':
	        window.location = 'index.en.html'
	        break;
        case 'resident':
        	window.location = 'index.en.html'
        	break;
    	case 'visitor':
    		window.location = 'visitor.en.html'
    		break;
	    case 'about':
	        window.location = 'about.en.html'
	        break;
        case 'on_this_day':
        	window.location = 'on_this_day.en.html'
        	break;
        case 'council':
            window.location = 'council.en.html'
            break;
    	case 'sports':
    		window.location = 'sports.en.html'
    		break;
    	case 'census':
    		window.location = 'census.en.html'
    		break;
    	case 'afl':
    		window.location = 'afl.en.html'
    		break;
        case 'events':
            window.location = 'events.en.html'
            break;
	    default:
	        window.location = 'index.en.html'
	        break;
	}
}