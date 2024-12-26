const wrapper = document.querySelector("#wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector("#btn");
const iconeClose = document.querySelector(".icone-close");


registerLink.addEventListener("click", function(){
    wrapper.classList.add('active')
  
});
loginLink.addEventListener("click", function(){
    wrapper.classList.remove('active')

});



btnPopup.addEventListener("click", function(){
    wrapper.classList.add('activepopup');
   
   
})

iconeClose.addEventListener("click", function(){
    wrapper.classList.remove('activepopup');
    wrapper.classList.remove('active')
  
});