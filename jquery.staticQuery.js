/**
 * staticQuery - Query's function to return DOM statically
 *
 * Example:
 * $.staticQuery('p').html(i);
 * -- or --
 * $.staticQuery('minha_query', $(this).parent().next().find('a:eq(0)')).attr('href');
 *
 * @autor Eduardo Pacheco <du@kanema.com.br>
 * @var	query	string
 * @var obj		object OR null
 * @return jQuery fn
 */
; ( function($) {

	$.staticQuery = function( query, obj ) {
		var isObj = ( obj !== undefined && obj.constructor !== Object );
		if ( query === undefined || query.constructor !== String || isObj ) {
			return $();
		};
		query = ( ( ! isObj ) ? query : "_" + query );
		
		if ( $.staticQuery._cache[query] === undefined )
		{
			var obj = obj || $(query);
			if ( obj.length === 0 ) {
				return obj;
			} else {
				$.staticQuery._cache[query] = obj;
			};
		};
		return $.staticQuery._cache[query];
	};
	
	$.extend(
		$.staticQuery,
		{

			_cache : {},

			// Clean cache
			clean : function( query ) {
				// Clean all
				if ( query === undefined ) {
					if ( $.staticQuery._cache === {} ) {
						return false;
					};
					$.staticQuery._cache = {};
					return true;
				};
				
				// Clean a cache object
				if ( $.staticQuery._cache[query] !== undefined || $.staticQuery._cache["_"+query] !== undefined ) {
					delete $.staticQuery._cache[query];
					return true;
				};
				return false;
			}

		}
	);
})( jQuery );