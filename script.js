let ham = document.getElementById("ham");
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3'); 
const icon4 = document.getElementById('icon4');
ham.addEventListener("click",openoptions);
let a=0;
function openoptions() {
    let options = document.getElementById("options");
    const icon = document.getElementById('icon');
    if(a===0){
        options.style.display= "flex";
        icon.style.color="red";
        a++;
    }else{
        options.style.display= "none";
        icon.style.color="white";
        a--;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('icon');
    icon.addEventListener('click', function () {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });
});
div1.addEventListener('mouseover', function() {
    icon1.classList.add('fa-beat');
});
div1.addEventListener('mouseout', function() {
    icon1.classList.remove('fa-beat');
});

div2.addEventListener('mouseover', function() {
    icon2.classList.add('fa-bounce');
});
div2.addEventListener('mouseout', function() {
    icon2.classList.remove('fa-bounce');
});

div3.addEventListener('mouseover', function() {
    icon3.classList.add('fa-bounce');
});
div3.addEventListener('mouseout', function() {
    icon3.classList.remove('fa-bounce');
});

div4.addEventListener('mouseover', function() {
    icon4.classList.add('fa-beat');
});
div4.addEventListener('mouseout', function() {
    icon4.classList.remove('fa-beat');
});

// form completion

const scriptURL = 'https://script.google.com/macros/s/AKfycbwaMaqdO7221_mSFxnpzCR5cyv91FzTMtEkORbMTRZVS4XETVC9BuLECzW1EgRncpsO/exec'

const form = document.forms['enrollment-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your enrollment is success you will receive mail regarding test in future...!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

let counter=document.getElementById('counter');
let submit=document.getElementById('submit');
let timer=document.getElementById('timer');
submit.addEventListener('click',function(){ 
    let count=5;
    counter.style.color="red";
    let interval=setInterval(function(){
        count--;
        counter.innerHTML=count;
        if(count===0){
            clearInterval(interval);
        }
        timer.style.opacity=1*(count*0.7);
    },1000);
});