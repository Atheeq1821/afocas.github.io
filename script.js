const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});
async function freelancerMail(){
    let params ={
        from_name: document.getElementById("freelancename").value,
        email_id: document.getElementById("freelancemail").value
    }
     await emailjs.send("service_w5sfntw","template_s427i2f",params)

}
async function clientMail(){
    let params ={
        from_name: document.getElementById("clientname").value,
        email_id: document.getElementById("clientmail").value
    }
    await emailjs.send("service_w5sfntw","template_pteg19j",params)
    

}
function redirect(){
    window.location.replace("freelance/freelance.html")
}
let freelanceForm = document.getElementById("freelance-form")
freelanceForm.addEventListener("submit",async e=>{
    e.preventDefault()
    await freelancerMail() 
    window.location.href="freelance/freelance.html"
})



let clientForm = document.getElementById("client-form")
clientForm.addEventListener("submit",async e=>{
    e.preventDefault()
    await clientMail() 
    window.location.href="client/client.html"
})




