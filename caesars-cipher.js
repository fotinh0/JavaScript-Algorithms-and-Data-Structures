function rot13(str) { 
    var array1 = [];
    var array2 = []; 
    var array = str.split("");
 
    for (let i = 0; i < array.length; i++) {    
        var index = array[i].charCodeAt();
   
        if (array[i].match(/[A-Z]/)){   
            if (index >= 65 && index <= 77) {
                index += 13;
        }
            else {
                index -= 13;
            }
            array1.push(index);
        }
        else {
            array1.push(array[i].charCodeAt());
        }
    } 
 
    for (let j = 0; j < array1.length; j++) {
        array2.push(String.fromCharCode(array1[j]));
    }
 
    return array2.join("");
}

rot13("SERR PBQR PNZC");
