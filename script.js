let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&& top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')
        }
    })
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = './ShivamTiwariCv.pdf' 
    link.download = 'resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const greetings = ["Hello", "Hola", "नमस्ते","Ciao"];
let currentGreetingIndex = 0;
const greetingElement = document.getElementById("greeting");
let currentLetterIndex = 0;

function displayNextLetter() {
    if (currentLetterIndex < greetings[currentGreetingIndex].length) {
        greetingElement.textContent += greetings[currentGreetingIndex][currentLetterIndex];
        currentLetterIndex++;
        setTimeout(displayNextLetter, 600); 
    } else {
        currentLetterIndex = 0;
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        setTimeout(displayNextGreeting, 900); 
    }
}

function displayNextGreeting() {
    greetingElement.textContent = "";
    displayNextLetter();
}

displayNextGreeting();


document.addEventListener("DOMContentLoaded", function() {
    (function(){
        emailjs.init("jS5gsBEiFBFCv6vR3"); // Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key
    })();
});

function sendEmail() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        name: name,
        email: email,
        subject: subject,
        number: number,
        message: message
    };

    emailjs.send('service_kzltckm', 'template_g932cfv', templateParams)
        .then(function(response) {
           document.getElementById("contactForm").reset();
           alert("Thank You for Contacting..");
        });

       

}
