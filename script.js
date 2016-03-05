var arr = new Array();


function start() {
	arr = setArray();
	//clear arr-box
	var arrBox = document.getElementById('arr-box');
	drawArray(arr,arrBox);
	arrBox.style.visibility = 'visible';


}
 function setArray(){
 	var form = document.forms[0].elements;
 	var arr = new Array();
 	for (var i = 0; i < form.length-1; i++) {
 		arr[i] = form[i].value;
 	}

 	return arr;
 }

 function drawArray(arr, arrBox) {
 	 	for (var i = 0; i < arr.length; i++) {
 	 		addElem(i,arr[i],arrBox);
 	 	}

 }

 function addElem(index,val,parent) {
 	var elemWidth = 50;//.arr-elem property

 	var elem = document.createElement('div');
 	elem.id = 'elem'+index;
 	elem.className = 'arr-elem';
 	elem.style.left= index*elemWidth +'px';
 	elem.innerHTML = val;
 	parent.appendChild(elem);
 }