/*


   THIS IS ONLY MADE FOR STUDYING ONLY!!!!



*/

let studentNumber ='0000000';
window.toPageN = function toPageN(){
 document.querySelector('.procced-button').
 addEventListener('click',()=>{
     localStorage.removeItem('number');
     studentNumber = document.querySelector('#js-input').value;
     localStorage.setItem('number',JSON.stringify(studentNumber));
     let StudentNumber = JSON.parse(localStorage.getItem('number'));
     let restritAphabet = [...studentNumber].every(char => /[^A-Za-z]/.test(char));
     if((studentNumber === null) || (studentNumber.length !== 9) || (!restritAphabet) || !(studentNumber.substring(0,2) == '22') ){
       document.querySelector('#js-input').value = '';
     }
     else{
        var a = document.createElement("a");
        a.href = "prototype2.html";
        a.click();
    }
      });
    }

let StudentNumber = JSON.parse(localStorage.getItem('number')) || '000000000';
document.querySelector('.student-number-text').innerHTML = StudentNumber;
document.querySelector('.student-number-value').value = StudentNumber;
