
require.config({
	"baseUrl": ".",
	"paths": {
		"jquery": "thirdparty/jquery",
		"yuri": "js/yuri/main",
		"bootstrap": "thirdparty/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});


require(['jquery', 'yuri', 'bootstrap'],
function( $, Yuri ) {

	var yuri = new Yuri();

	$( document ).ready( function(){
		$('#button_code').click( function(){
			$('#output').text( 
				yuri.code_string($("#input").val()).join(" ").toUpperCase()
			);
		});
		$('#button_decode').click( function(){
			$('#output').text( 
				yuri.decode_string($("#input").val()).join("")
			);
		});
	});
});

