require.config({
	"baseUrl": "www/",
	"paths": {
		"jquery": "thirdparty/jquery",
		"yuri": "js/yuri/main"
	}
});

define(['yuri'], function(Yuri) {
//require(["yuri"],
//function (Yuri) {

describe("Testando o construtor", function() {
	it("Inicializar e destruir", function() {
		var yuri=new Yuri();
		expect(yuri).toBeDefined();
	});
});
describe("Entradas e saidas", function() {
	var yuri=new Yuri();

	it('20141101', function() {
		expect(yuri.code_string('20141101')).toEqual(['b9','b7','b7','b6','b8','b4','b2','b3']);
	});

	it('111', function() {
		expect(yuri.code_string('111')).toEqual(['b4','b3','b2']);
	});

	it('AhmfnXtqh', function() {
		expect(yuri.code_string('AhmfnXtqh')).toEqual(['f1','f9','fb','de','f3','ea','f0','ea','c2']);
	});

	it('Bingo-jatiuca', function() {
		expect(yuri.code_string('Bingo-jatiuca')).toEqual(['ee','ef','00','f3','fd','e9','f1','b3','f4','eb','f1','eb','c3']);
	});

	it('Bingo-jatiuczzzzzzzzzzz', function() {
		expect(yuri.code_string('Bingo-jatiuczzzzzzzzzzz')).toEqual(['11','10','0f','0e','0d','0c','0b','0a','09','08','07','ef','00','f3','fd','e9','f1','b3','f4','eb','f1','eb','c3']);
	});

	it('Rock CORNO', function() {
		expect(yuri.code_string('Rock CORNO')).toEqual(['d9','d7','da','d6','c9','a5','ef','e6','f1','d3']);
	});

	it(' !"#$%&\'()*+,-./', function() {
		expect(yuri.code_string(' !"#$%&\'()*+,-./')).
		toEqual(['bf','bd','bb','b9','b7','b5','b3','b1','af','ad','ab','a9','a7','a5','a3','a1']);
	});
});

});

