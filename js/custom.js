$( document ).on( "pageinit", "#pixelache-app", function() {
			
				$( document ).on( "swipeleft swiperight", "#pixelache-app", function( e ) {
					if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
					if ( e.type === "swipeleft"  ) {
						$( "#right-panel" ).panel( "open" );
							} else if ( e.type === "swiperight" ) {
								$( "#left-panel" ).panel( "open" );
							}
					}
				});
			});