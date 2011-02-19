// ==UserScript==
// @name           Twitter - Open Parent Message
// @namespace      http://www.niluge-kiwi.info/gm
// @description    Adds a keyboard shortcut to twitter pages to open parent message
// @include        http://twitter.com/*/status*/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js
// ==/UserScript==

var background_key = 80; // the 'p'-key

jQuery.noConflict();

(function() {
	// create function
	var open_parent = function() {
	  	var elt = jQuery('.entry-meta a:last')
		var url = elt.attr('href');

		window.location.href(url);
	};
	
	// bind key-handler
	jQuery(document).keydown(function(e) {
		if ( ! (e.altKey || e.ctrlKey || e.metaKey) && e.which == background_key ) {
			open_parent();
		}
	});
})();
