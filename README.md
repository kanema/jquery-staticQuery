JQuery Static Query
=============

About
-------

staticQuery is a jQuery plugin that creates static variables, making the tasks more quickly, as the example:

	( function($) {
		
		$.staticQuery('p');
		
	})(jQuery);
	
In this example are stored all the p elements, the next call `$. StaticQuery ('p')` p selector will not be fetched, returns directly from the cache.

To clear the cache, there are two ways. One clears the whole cache:
	( function($) {
		
		$.staticQuery.clean();
		
	})(jQuery);

And another clean one specific element:
	( function($) {
		
		$.staticQuery.clean('p');
		
	})(jQuery);
	
Simple! Enjoy!