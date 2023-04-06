var acknowledge;

function getCipherName (name) {

	document.getElementById('algoName').innerHTML = "You Selected "+ name + " Cipher";

	selectAlgorithm(name);
}

var encryptButton = document.getElementById('encryptButton');
var decryptButton = document.getElementById('decryptButton');

function selectAlgorithm(name) {

	if(name == 'Caesar'){
		//caesarEncrypt();
		encryptButton.addEventListener('click', caesarEncrypt);
	}

	if(name == 'Vigenere'){
		encryptButton.addEventListener('click', vigenereEncrypt);	
		decryptButton.addEventListener('click', vigenereDecrypt);
	}
}

function caesarEncrypt () {
		let message = document.getElementById('inputText').value;
		let key = document.getElementById('key').value;

		let result = '';
  
  for (let i = 0; i < message.length; i++) {

    let charCode = message[i].charCodeAt();
   
    if (charCode > 96 && charCode < 123) {
      
      charCode += key % 26 

      if (charCode > 122) {
        charCode = (charCode - 122) + 96;
        
      } else if (charCode < 97) {
        charCode = (charCode - 97) + 123;
      }
    }

    if (charCode > 64 && charCode < 91) {
      
      charCode += key % 26
      
      if (charCode > 90) {
        charCode = (charCode - 90) + 64;
      } else if (charCode < 65) {
        charCode = (charCode - 65) + 91;
      }
    }

    result += String.fromCharCode(charCode);
	}
		document.getElementById('showCipherText').innerHTML = result;
	}

//vigenere Encrypt

function vigenereEncrypt () {
		let message = document.getElementById('inputText').value;
		let key = document.getElementById('key').value;

		function isLetter (str) {
  				return str.length === 1 && str.match(/[a-zA-Z]/i)
		}
 

		function isUpperCase (character) {
  				if (character === character.toUpperCase()) {
   			 return true
  		}

  		if (character === character.toLowerCase()) {
   				 return false
  			}
		}

	let result = ''
 
  	for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65)
      } else {
        result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97)
      }
    } else {
      result += c
    }
    	j = ++j % key.length
  	}

		document.getElementById('showCipherText').innerHTML = result;
	}

//vigenere decrypt

	function vigenereDecrypt () {
		let message = document.getElementById('inputText2').value;
		let key = document.getElementById('key2').value;

		function isLetter (str) {
  				return str.length === 1 && str.match(/[a-zA-Z]/i)
		}
 

		function isUpperCase (character) {
  				if (character === character.toUpperCase()) {
   			 return true
  		}

  		if (character === character.toLowerCase()) {
   				 return false
  			}
		}

		let result = ''
 
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
      } else {
        result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
      }
    } else {
      result += c
    }
    j = ++j % key.length
  }

  		document.getElementById('showCipherText').innerHTML = result;
	}



