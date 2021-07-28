// Palindrome Checker

function palindrome(string) {
    let letters = string.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    letters = letters.toLowerCase().split('');
    
    for (let i = 0; i < letters.length - 1/2; i++){
      if (letters[i] !== letters[letters.length - 1 - i]){
        return false;
      }
    }
    return true;
  }