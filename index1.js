let inputvalue=document.querySelector('input');
let output=document.getElementsByClassName('message');
let marks=document.getElementsByClassName('score');
let randomNum=parseInt(Math.random() * 100+ 1);
console.log(randomNum);

let counted= 100;
function maincheck()
{
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
        output[0].innerHTML=("☺☺Hurray you won☺☺");
        marks[0].innerHTML=(counted);
    }
}
