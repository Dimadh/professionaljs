var arr = new Array;

var innerI = 0,//for pseudoloop
	outerI = 0;
function start() {
	arr = setArray();
	var arrBox = document.getElementById('arr-box');
	
	if(arrBox.style.visibility == 'visible')
		eraseArrBox(arr,arrBox);
	innerI = 0;
	outerI = 0;
	drawArray(arr,arrBox);
}
function setArray(){
 	var form = document.forms[0].elements;
 	var arr = new Array();
 	for (var i = 0; i < form.length-1; i++) {
 		arr[i] = parseFloat(form[i].value);
 	}

 	return arr;
 }

function drawArray(arr, arrBox) {
 	for (var i = 0; i < arr.length; i++) {
 		addElem(i,arr[i],arrBox);
 	}
 	arrBox.style.visibility = 'visible';

}

function eraseArrBox(arr,arrBox){
 	for (var i = 0; i < arr.length; i++) {
 		document.getElementById('elem'+i).remove();
 	}
 }

function addElem(index,val,parent) {
 	var elemWidth = 50;//.arr-elem width css property

 	var elem = document.createElement('div');
 	elem.id = 'elem'+index;
 	elem.className = 'arr-elem';
 	elem.style.left= index*elemWidth +'px';
 	elem.innerHTML = val;
 	parent.appendChild(elem);
 }



 function nextClicked(){
 	if(outerI<arr.length){
 		//alert('outer: ' +outerI + ' inner: '+ innerI + ' arr: ' + arr);
 		if(innerI<arr.length-outerI){
 			if (arr[innerI]>arr[innerI+1]){
 				//alert(arr[innerI] +'>' + arr[innerI+1]);
 				var temp = arr[innerI];
 				arr[innerI] = arr[innerI+1];
 				arr[innerI+1] = temp;
 			}
 			innerI++;
 			if(innerI == arr.length-outerI){
				innerI =0;
				outerI++;
			}
 		}
 	}else{	
 		alert(arr);
 	}
 }

 function clearBox(){
 	alert(arr);
 }