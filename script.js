let SliderImage = document.getElementById("sliderImage");
let index = 1;
let ImgArry = [
    'LT-Webdesign.webp',
    '9f8272f1ea0498cf50e44e936c1bba39--dashboard-ui-dashboard-design.jpg',
    '2_4847.jpg',
    '5061659_2638287.jpg',
    '11excel-webdesign.png'
];

function prevImg(){
    SliderImage.setAttribute("src",ImgArry[index]);
    index--;
    if(index < 0){
        index=4;
    }
}

function nextImg(){
    SliderImage.setAttribute("src",ImgArry[index]);
    index++;
    if(index > 4){
        index=0;
    }
}
setInterval(nextImg,3000);


// -------------------navbar coding
const navBtn = document.getElementById("nav-box");
const navBar = document.getElementById("navbar");

document.onclick = function(e){
    if(e.target.id !== 'nav-box' && e.target.id !== 'navbar'){
        navBar.classList.remove("active");
        navBtn.classList.remove("active");
    }
}

navBtn.addEventListener("click",() => {
    navBar.classList.toggle("active");
    navBtn.classList.toggle("active");
});


//--------------- email js coding
// function sendMail(){
//     var container = {
//         from_name : document.getElementById("from_name").value,
//         contact_no : document.getElementById("contact_no").value,
//         email_id : document.getElementById("email_id").value,
//         message : document.getElementById("message").value
//     }
//     emailjs.send("service_esy5mrw","template_40u7t0p",container).then(function (res){
//         alert("Success fully send with status code " + res.status);
//     })
// }

const btn = document.getElementById('button');
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_esy5mrw';
   const templateID = 'template_40u7t0p';
    

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert("Success fully send with status code " + res.status);
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

