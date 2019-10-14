function palindrome(mot) {
if (( mot.length == 0 ) || (mot.length == 1)){
return true
} else { 
    // completer
    return false
}}
function estpalindrome(chaine) {
  if(palindrome(chaine)){
      console.log(chaine, "est un palindrome")
    } else {
        console.log(chaine, "n'est PAS un palindrome") 
    }
}


function estPalindrome(chaine) {
    if(palindrome(chaine)){

    console.log(chaine, "est un palindrome" )
    } else {
   console.log(chaine, "n'est PAS un palindrome" )
    }
}
estPalindrome("BOB")
estPalindrome("ANNA")
estPalindrome("ESOPE RESTE ICI ET SE REPOSE")