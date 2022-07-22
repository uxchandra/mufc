const txtElement = ['Chandra Aditya', '18 year old', 'a Student', 'living in Kudus Regency' ];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function writing(){

	if(count == txtElement.length){
		count = 0;
	}

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.writing-effect').textContent = words;

    if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

    setTimeout(writing, 275);

})();