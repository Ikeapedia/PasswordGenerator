

document.querySelector('button').addEventListener('click',init)


function init() {
    var passLength = prompt('How long would you like your password to be?');
    console.log(passLength);
    
    if(!passLength) return;

    if (passLength < 8){
      alert("Error: The length of your requested passwords is too short");
      return init();
    }

    if (passLength > 128){
      alert("Error: The length of your requested password is too long");
      return init();
    }

    var temp = "";
    var password = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var numbers = confirm("Would you like numbers in your password?");
    var upper = confirm("Would you like uppercase letters in your password?");
    var lower = confirm("Would you like lowercase letters in your password");
    var special = confirm("Would you like special characters in your password?");

    if (lower) temp+=alpha;
    if (numbers) temp+="0123456789";
    if (upper) temp+=alpha.toUpperCase();
    if(special) temp+="!@#$%^&*()_+-=,./?";
    if(!lower && !numbers && !upper && !special) return;

    console.log(temp);

    for (i = 0; i < passLength; i++){
      password+= temp[Math.floor(Math.random()*temp.length)];

    }

    document.querySelector("textarea").innerText = password;


}
