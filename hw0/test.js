var arrBox = document.getElementById('arr-box');

describe("start", function() {
	before(function() {
		document.forms[0].elements[0].value = 5;
		document.forms[1].elements[1].value = 3;
		document.forms[2].elements[2].value = 7;
	 	document.getElementById('goBtn').click();
	});
	

	describe("setArray", function() {
		it("Создание массива", function() {
	    assert.notEqual(window.arr.length,0);
	  });
	});

	describe("drawArray", function() {
			it("Отрисовка массива", function() {
				 for (var i = 0; i < window.arr.length; i++) {
	  				 assert.isNotNull(document.getElementById("elem"+i));
	  			} 
		  });	 
	});

  it("Открытие панели визуализации", function() { 
    assert.equal(arrBox.style.visibility,'visible');
  });

});

describe("clearBox", function() {
  it("Cокрытие панели визуализации", function() {
	document.getElementById('clearBtn').click();
	assert.equal(arrBox.style.visibility,'hidden');
  });

});