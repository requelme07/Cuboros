// Menu
jQuery(function($){

  let menu = $("#menu");
  let menuSmall = $("#menuSmall");
  let navToggle = $("#navToggle");
  let mainContent= $("#mainContent");
  let mainContainer = $("#mainContainer");

  navToggle.on("click", function(event){
    event.preventDefault();
    if (window.matchMedia('screen and (max-width: 992px)').matches) {
      menu.toggleClass("show");
      mainContent.toggleClass("big");
    } else {
      menu.toggleClass("show");
      menuSmall.toggleClass("hide")
      mainContainer.toggleClass("main-container_menu");
    }
    
 });
 menuSmall.on("click", function (event){
    event.preventDefault();

    menu.removeClass("show");
    menuSmall.removeClass("hide")
    mainContent.removeClass("big");
    mainContainer.removeClass("main-container_menu");
 });

});


// Save form

let name = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let facebook = document.getElementById('facebook')
let vk = document.getElementById('vk')
let ok = document.getElementById('ok')
let telegram = document.getElementById('telegram')
let newPassword = document.getElementById('newPassword')
let repeatPassword = document.getElementById('repeatPassword')
let oldPassword = document.getElementById('oldPassword')

let saveBtn = document.getElementById('save-btn')
let saveBtnSocial = document.getElementById('saveBtnSocial')
let saveBtnPassword = document.getElementById('saveBtnPassword')

 saveBtn.onclick = function (e){
    e.preventDefault()
    localStorage.setItem("name", name.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
 }
 saveBtnSocial.onclick = function (e){
  e.preventDefault()
  localStorage.setItem("facebook", facebook.value);
  localStorage.setItem("vk", vk.value);
  localStorage.setItem("ok", ok.value);
  localStorage.setItem("telegram", telegram.value);
}
saveBtnPassword.onclick = function (e){
  e.preventDefault()
  localStorage.setItem("newPassword", newPassword.value);
  localStorage.setItem("repeatPassword", repeatPassword.value);
  localStorage.setItem("oldPassword", oldPassword.value);
}
 
 window.onload = function(){
    name.value = localStorage.getItem("name");
    lastName.value = localStorage.getItem("lastName");
    email.value = localStorage.getItem("email");
    phone.value = localStorage.getItem("phone");
    facebook.value = localStorage.getItem("facebook");
    vk.value = localStorage.getItem("vk");
    ok.value = localStorage.getItem("ok");
    telegram.value = localStorage.getItem("telegram");
    newPassword.value = localStorage.getItem("newPassword");
    repeatPassword.value = localStorage.getItem("repeatPassword");
    oldPassword.value = localStorage.getItem("oldPassword");
}
