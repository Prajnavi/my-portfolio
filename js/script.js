//menu
let menuBtn = document.getElementById("menu");
let hiddenMenu = document.getElementById("hidden")

let menuClick =() =>{
    hiddenMenu.style.display = 
    hiddenMenu.style.display === "none"  || hiddenMenu.style.display===""
    ? "flex" : "none";
    hiddenMenu.style.transition = "all 0.5s ease";
};

//theme
const themeButton = document.getElementById("theme")
const savedTheme = localStorage.getItem("theme");
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    themeButton.innerText = '🌒︎'
} else {
    document.body.classList.remove("dark-mode");
    themeButton.innerText = '🌖︎'
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("theme", 'dark');
        themeButton.innerText = '🌒︎'
    } else {
        localStorage.setItem("theme", 'light');
        themeButton.innerText = '🌖︎'
    }
});

// form
let form  = document.getElementById("cont-form");
let formmsg = document.getElementById("form-msg");
let submitbtns=document.getElementsByClassName("form-submit");
let submitbtn=submitbtns[0];

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", async (e) =>{
        e.preventDefault();
        
        submitbtn.disabled = true;
        submitbtn.innerText = "Sending..."
        let formdata = new FormData(form);

        try {
            let res = await fetch(form.action, {
                method:"POST", body: formdata, headers:{"Accept":"application/json"}
            });
            if (res.ok) {
                formmsg.innerText="Message sent sucessfully!";
                formmsg.className = 'form-note success';
                form.reset();
                submitbtn.innerText="Send Message"
            }
            else {
                formmsg.innerText="Failed to send message. Please try again.";
                formmsg.className = "form-note error"
                submitbtn.innerText="Send Message";
            }
        }
        catch(error) {
            formmsg.innerText="Something went wrong. Plase try again."
            formmsg.className="form-note error";
            submitbtn.innerText="Send Message";
        }
        submitbtn.disabled=false;
    });
});
