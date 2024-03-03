window.addEventListener('load', function () {
    allinputs = document.querySelectorAll('input'); 
    
});
function available(event){
    document.getElementById('error').innerHTML = '';
    for (let i = 0; i < allinputs.length; i++) {
        var str = allinputs[i].value;
        if (str.trim()===''){
            event.preventDefault();
            document.getElementById('error').innerHTML='Data not completed, please re-enter.';
            return;
        }
        if (allinputs[i] == document.getElementById('visitors')) {
            var numberValue = parseFloat(str);
            if (numberValue < 1 || numberValue % 1 != 0) {
                event.preventDefault();
                document.getElementById('error').innerHTML = 'Please enter a valid number of people!';
                return;
            }
        }
        if (str.length == 0) {
            event.preventDefault();
            document.getElementById('error').innerHTML = 'Data not completed, please re-enter.';
            return;
        }
    }

    if (reserve(allinputs[0].value, document.getElementById('Time').value, allinputs[1].value) == true) {
        event.preventDefault();
        alert("Your reservation is successful!");
    }
    else {
        event.preventDefault();
        alert("Sorry, the reservation is full!");
   }

}

