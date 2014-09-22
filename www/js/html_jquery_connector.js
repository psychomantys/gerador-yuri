
require.config({
	"baseUrl": ".",
	"paths": {
		"jquery": "thirdparty/jquery",
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


require(['jquery', "js/yuri/main", "bootstrap"],
function( $, Yuri ) {

	var yuri = new Yuri();

	$( document ).ready( function(){
		$('#button_code').click( function(){
			$('#output').text( 
				yuri.code_string($("#input").val()).join(" ").toUpperCase()
//				yuri.code_string($("#input_code").val()).join(" ");
			);
		});
		$('#button_decode').click( function(){
			$('#output').text( 
				yuri.decode_string($("#input").val()).join("")
//				yuri.code_string($("#input_code").val()).join(" ");
			);
		});
	});
});

