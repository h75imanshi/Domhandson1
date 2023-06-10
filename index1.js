//guess
let inputvalue=document.querySelector('input');

let output=document.getElementsByClassName('message');
let marks=document.getElementsByClassName('score');
let guess=document.getElementsByClassName('number');
let higher=document.getElementsByClassName('highscore');
let randomNum=parseInt(Math.random() * 100+ 1);
console.log(randomNum);

let counted= 100;
function maincheck(){
    console.log(inputvalue.value);
    if(randomNum>inputvalue.value){
        output[0].innerHTML=("Your guess is Low");
        counted--;
        marks[0].innerHTML=(counted);
    }
    else if(randomNum<inputvalue.value)
    {
        output[0].innerHTML=("Your guess is high");
        counted--;
        marks[0].innerHTML=(counted);
    }
    else{
        output[0].innerHTML=("😀😀Hurray you won😀😀");
        guess[0].innerHTML=inputvalue.value;
       
        higher[0].innerHTML=(counted);
        marks[0].innerHTML=(counted);
    }
}

function again(){
    location.reload('parent')
}
