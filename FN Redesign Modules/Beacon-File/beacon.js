/* csADS beacon */
(function( window ) {

/* CDE says: ALWAYS comment with multi-line comments */
window.clog = function() { if ( window.console && window.console.log ) { window.console.log( arguments ); } };
if ( typeof window.csADS != 'undefined' ) { return false; }

( window.csADS = function( options ) {
	return new window.csADS.fn.init( options );
}).fn = prototype = {
	
	init : function( options ) {
	},
	
	setupMessage : function() {
		/* create some listeners for the parent page */
		if ( window.attachEvent ) {
			window.attachEvent( 'onmessage', this.message );
		} else if ( window.addEventListener ) {
			window.addEventListener( 'message', this.message, false );
		}
	},
	
	message : function( event ) {
		if ( event && event.data && typeof event.data === 'string' && event.data.indexOf( 'csADS' ) != -1 ) {
			var data	= $.parseJSON( event.data ) || null;
			
			if ( data ) {
				var fn		= typeof data.fn != 'undefined' ? data.fn : null,
					HTML	= typeof data.HTML != 'undefined' ? data.HTML : '';
				
				/* run any supplied instructions from iframe */
				if ( fn ) {
					eval( '(' + decodeURI( fn ) + ')();' );
				}
			}
		}
	}
};
window.csADS.fn.init.prototype = window.csADS.fn;
/* setup postMessage for the parent page */
window.csADS().setupMessage();

})( window );
