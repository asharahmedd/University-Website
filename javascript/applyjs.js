window.addEventListener('load',function(){

var coe = document.querySelector("#coe");
var cos = document.querySelector("#cos");
var coid = document.querySelector("#coid");
var coidforms = document.querySelector("#collegeofinterdisciplinarystudies");
var cosforms = document.querySelector("#collegeofscience");
var coeforms = document.querySelector("#collegeofengineering");


coe.onclick = coetabs; 
function coetabs(){
    coe.setAttribute("style", "background-color:white");
    cos.setAttribute("style", "background-color:black");
    coid.setAttribute("style", "background-color:black");
    coeforms.setAttribute("style", "display: inline-block");
    cosforms.setAttribute("style", "display: none");
    coidforms.setAttribute("style", "display: none");

}
coetabs();
cos.onclick = costabs;
function costabs(){
    cos.setAttribute("style", "background-color:white");
    coe.setAttribute("style", "background-color:black");
    coid.setAttribute("style", "background-color:black");
    cosforms.setAttribute("style", "display: inline-block");
    coeforms.setAttribute("style", "display: none");
    coidforms.setAttribute("style", "display: none");

}

coid.onclick = coidtabs;
function coidtabs(){
    coid.setAttribute("style", "background-color:white");
    cos.setAttribute("style", "background-color:black");
    coe.setAttribute("style", "background-color:black");
    coidforms.setAttribute("style", "display: inline-block");
    cosforms.setAttribute("style", "display: none");
    coeforms.setAttribute("style", "display: none");

}
var forms = document.querySelectorAll('form'); 
for(let i=0;i<forms.length;i++){
    forms[i].onmouseover = hoveron;
    forms[i].onmouseout = hoveroff;
}
function hoveron(){
    this.setAttribute('style','background-color:lightblue');//hover implemented using javascript
}
function hoveroff(){
    this.setAttribute('style','background-color:white');//hover implemented using javascript
}

allbtns= document.querySelectorAll("button");
        for (let i =0; i<allbtns.length;i++){
            allbtns[i].onclick = ranking;
        }

        var rankarray = Array(10);
        var majorarray = [];

        var numberofmajors = 0;
        var maximumrank = 0;
        
        function ranking(event){
            event.preventDefault();
            var currentmajor = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            var currentrank = this.previousElementSibling.value;
            var collegeid = this.parentNode.parentNode.id;
            var college;
            if (Number(currentrank) == NaN || currentrank=="") {
                alert("Please enter rank of chosen major");
                return;
            }
            if (Number(currentrank) != Math.floor(Number(currentrank))){
                alert("Please enter rank of chosen major");
                return;
            }
            if(Number(currentrank)<1 || Number(currentrank)>10){
                alert("Please enter the rank of chosen between 1 and 10");
                return;
            }
        
            if (majorarray.indexOf(currentmajor) != -1){
                alert("You have already chosen this major");
                return;
            }
            else if (rankarray.indexOf(currentrank) != -1){
                alert("You have already chosen this rank");
                return;
            }
        
            if (Number(currentrank) > Number(maximumrank)){
                maximumrank = currentrank;
            } 
            rankarray[currentrank] = currentrank;
            majorarray.push(currentmajor);

            switch (collegeid) {
                case "collegeofengineering":
                    college = "College of Engineering";
                    break;
                case "collegeofscience":
                    college = "College of Science";
                    break;
                case "collegeofinterdisciplinarystudies":
                    college = "College of Interdisciplinary Studies";
                    break;
            }
            document.getElementById(currentrank).innerHTML = "<td>" + college + "</td><td>" + currentmajor + "</td> <td>" + currentrank + "</td>";
            updateTable();

            switch (currentrank){
                case "3" :
                    message = "You have chosen " + currentmajor + " as your "+ currentrank +"rd "+ "chosen major in " + college + " successfully";
                    break;
                case "2" :
                    message = "You have chosen " + currentmajor + " as your "+ currentrank +"nd "+ "chosen major in " + college + " successfully";
                    break;

                case "1" :
                    message = "You have chosen " + currentmajor + " as your "+ currentrank +"st "+ "chosen major in " + college + " successfully";
                    break;

                default:
                    message = "You have chosen " + currentmajor + " as your "+ currentrank +"th "+ "chosen major in " + college + " successfully";
                    break;
                    
                }
                alert(message);

            }

        function updateTable(){
                answer = CurrentTime();
                var time = document.querySelector("#time");
                time.innerHTML = "Last Change time: " + answer;
                numberofmajors = majorarray.length;
                chosenmajors.innerHTML = "Total Number of major Applied: " + numberofmajors;
            }
        function CurrentTime(){
                var date = new Date();
                var month = date.getMonth() + 1;

                var seconds = date.getSeconds();
                if (seconds<10){
                    seconds = "0"+ seconds;
                }
                var minutes = date.getMinutes();
                if (minutes<10){
                    minutes = "0"+ minutes;
                }
                var hour1 = date.getHours();
                if (hour1<10){
                    hour1 = "0"+ hour1;
                }

                ans = date.getFullYear() +"/"+ month +"/"+date.getDate() +  " " + hour1 +":"+ minutes + ":" + seconds;
                return ans;
            }
 
            var chosenmajors = document.querySelector("#chosenmajors");
            var error = document.querySelector("#error");
            var submit = document.querySelector("#submit");
           

            submit.onclick = TableChecker;
            
            function TableChecker(event) {
                event.preventDefault();
                var tablemessage;
                error.innerHTML = "";
                gaps = CheckGap(rankarray);


                if (numberofmajors === 0) {
                    tablemessage = "You have not chosen any major.";
                }
            
                else if (gaps.length != 0){
                    switch (gaps[0]) {
                        case 1:
                            tablemessage = "You have not chosen your 1st chosen major, ";
                            break;
                        case 2:
                            tablemessage = "You have not chosen your 2nd chosen major, ";
                            break;
                        case 3:
                            tablemessage = "You have not chosen your 3rd chosen major, ";
                            break;
                        default:
                            tablemessage = "You have not chosen your " + gaps[0]+ "th chosen major, ";
                            break;
                    }
                    for (let index = 1; index < gaps.length; index++) {
                        switch (gaps[index]) {
                            case 2:
                                tablemessage = tablemessage + "and 2nd chosen major, ";
                                break;
                            case 3:
                                tablemessage = tablemessage + "and 3rd chosen major, ";
                                break;
                            default:
                                tablemessage = tablemessage + "and " + gaps[index ]+ "th chosen major, ";
                                break;
                        }
                    }
                    tablemessage = tablemessage + "you can not leave any gap between your major";   
                }
                else{
                    tablemessage = "You have successfully submitted your application at time " + CurrentTime();
                }
                error.innerHTML = tablemessage; 
            }

            
            function CheckGap(array) {
                gapArray = Array();
                for (let index = 1; index < maximumrank; index++) {
                    if (array[index] == undefined){
                        gapArray.push(index);
                    } 
                }
                return gapArray;
            }


        var clear = document.querySelector('#clear');
        clear.onclick = cleartable;
        function cleartable(event){
            event.preventDefault();
            error.innerHTML = "";
            for(let i=1;i<=10;i++){
                value = document.getElementById(i);
                value.innerHTML = "<td>"  +"</td>" + "<td>"  +"</td>" + "<td>" + i +"</td>";
            };
            answer = CurrentTime();
            var time = document.querySelector("#time");
            time.innerHTML = "Last Change time: " + answer;
            chosenmajors.innerHTML = "Total Number of major Applied: 0 " ;
            rankarray = Array(10);
            maximumrank = 0;
            majorarray = [];
            numberofmajors=0;
            var inputarray = document.querySelectorAll('input');
            for(let i;i<inputarray.length;i++){
                inputarray[i].value = 0;

            }
        }



});



