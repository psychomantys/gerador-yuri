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
describe("Entradas para codificar", function() {
	var yuri=new Yuri();

	it('20141101', function() {
		var t=yuri.code_string('20141101');
		var t2=['b9','b7','b7','b6','b8','b4','b2','b3'];
		expect(t).toEqual(t2);
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
	it('Conf-Brasileira-De-Canoagem', function() {
		expect(yuri.code_string('Conf-Brasileira-De-Canoagem')).
			toEqual(['08','ff','00','f9','06','04','f6','d7','c0','f7','d5','bd','f0','00','f6','f1','f7','f3','fc','e9','f9','c8','b2','ea','f1','f1','c4']);
	});
});
describe("Entradas para decodificar", function() {
	var yuri=new Yuri();

	it('b9 b7 b7 b6 b8 b4 b2 b3', function() {
		var t='20141101';
		var t2=yuri.decode_string('b9 b7 b7 b6 b8 b4 b2 b3').join("");
		expect(t2).toEqual(t);
	});

	it('b4 b3 b2', function(){
		expect(yuri.decode_string('b4 b3 b2').join("")).toEqual('111');
	});

	it('f1 f9 fb de f3 ea f0 ea c2', function(){
		expect(yuri.decode_string('f1 f9 fb de f3 ea f0 ea c2').join("")).toEqual('AhmfnXtqh');
	});

	it('ee ef 00 f3 fd e9 f1 b3 f4 eb f1 eb c3', function(){
		expect(yuri.decode_string('ee ef 00 f3 fd e9 f1 b3 f4 eb f1 eb c3').join("")).toEqual('Bingo-jatiuca');
	});

	it('11 10 0f 0e 0d 0c 0b 0a 09 08 07 ef 00 f3 fd e9 f1 b3 f4 eb f1 eb c3', function() {
		expect(yuri.decode_string('11 10 0f 0e 0d 0c 0b 0a 09 08 07 ef 00 f3 fd e9 f1 b3 f4 eb f1 eb c3').join("")).toEqual('Bingo-jatiuczzzzzzzzzzz');
	});

	it('d9 d7 da d6 c9 a5 ef e6 f1 d3', function() {
		expect(yuri.decode_string('d9 d7 da d6 c9 a5 ef e6 f1 d3').join("")).toEqual('Rock CORNO');
	});

	it('bf bd bb b9 b7 b5 b3 b1 af ad ab a9 a7 a5 a3 a1', function() {
		expect(yuri.decode_string('bf bd bb b9 b7 b5 b3 b1 af ad ab a9 a7 a5 a3 a1').join("")).
			toEqual(' !"#$%&\'()*+,-./');
	});

	it('08 ff 00 f9 06 04 f6 d7 c0 f7 d5 bd f0 00 f6 f1 f7 f3 fc e9 f9 c8 b2 ea f1 f1 c4', function() {
		expect(yuri.decode_string('08 ff 00 f9 06 04 f6 d7 c0 f7 d5 bd f0 00 f6 f1 f7 f3 fc e9 f9 c8 b2 ea f1 f1 c4').join("")).
			toEqual('Conf-Brasileira-De-Canoagem');
	});
});


});

