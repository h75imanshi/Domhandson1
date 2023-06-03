// answer 1//
let first = document.getElementById("text")
console.log(first)
// answer 2//
let second = document.getElementsByTagName('h1')
console.log(second)

// answer3//
let third = document.getElementsByClassName("box")
console.log(third);

//answer 4//
var a = document.getElementsByClassName('Text');
console.log(a[0].innerHTML);
a[0].addEventListener('click',() => {
    a[0].innerHTML = "Hello World";
})

//answer5//
var Change = document.getElementsByClassName('change');
console.log(Change[0].innerHTML);
function trans() {
Change[0].innerHTML = "Welcome to Elevation academy";
}

// answer6//
let six = document.getElementById('heading')
console.log(six)
six.style.color = 'red'
six.style.fontSize = "20px"

// answer 7//
let seven = document.querySelector('.parent');
let count= true;
function changeDirection()
{
    if(count)
    {
        seven.style.display ='block';
        count=false;
    }
    else
    {
        seven.style.display ='flex';
        count=true;
    }
   
}

// answer9//
let display = document.querySelectorAll('h3');
display[0].addEventListener('click',() =>
{
    function startclock()
    {
        let time = new Date();
        let AMPM = "AM";
        let hrs=time.getHours();
        let mins=time.getMinutes();
        let secs=time.getSeconds();
        if(hrs>12)
        {
            hrs-=12;
            AMPM="PM";
        }
        
        console.log('time:${hrs}:${mins}:${secs}');
         display[1].innerHTML=`${hrs}:${mins}:${secs} ${AMPM}`
       }
       setInterval(()=>{
        startclock();
               },1000)
})






