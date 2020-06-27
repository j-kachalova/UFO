let idOpen, idClose, idMenu, idHeader, idMain, idFooter, idSignUp, idLogOut;
function openMenu(idOpen, idMenu, idHeader, idMain, idFooter){
  document.getElementById(idMenu).style.display = 'block';
  document.getElementById(idOpen).style.display = 'none';
  document.getElementById(idHeader).style.display = 'none';
  document.getElementById(idMain).style.display = 'none';
  document.getElementById(idFooter).style.display = 'none';
}
function closeMenu(idOpen, idMenu, idHeader, idMain, idFooter){
  document.getElementById(idMenu).style.display = 'none';
  document.getElementById(idOpen).style.display = 'flex';
  document.getElementById(idHeader).style.display = 'flex';
  document.getElementById(idMain).style.display = 'flex';
  document.getElementById(idFooter).style.display = 'flex';
}
let page;
function logOutB(){
  localStorage.setItem('button', 'true');
  localStorage.setItem('logIn', 'false')
  logOut();
}
let l, b;
function logOut(l, b){
  if(localStorage.getItem('logIn')=='false' && localStorage.getItem('button')=='true'){
    document.getElementsByClassName("buttons__signup-off")[0].setAttribute("class", "buttons__signup");
    document.getElementsByClassName("buttons__logout-active")[0].setAttribute("class", "buttons__logout");
  }
  else if(localStorage.getItem('logIn')=='true'){
    document.getElementsByClassName("buttons__signup")[0].setAttribute("class", "buttons__signup-off");
    document.getElementsByClassName("buttons__logout")[0].setAttribute("class", "buttons__logout-active");
  }
}
function logInB(){
  document.location.href="#";
  localStorage.setItem('logIn', 'true');
  localStorage.setItem('button', 'true');
  logIn();
}
function logIn(){
if(localStorage.getItem('logIn')=='true' && localStorage.getItem('button')=='true'){
    document.getElementsByClassName("buttons__signup")[0].setAttribute("class", "buttons__signup-off");
    document.getElementsByClassName("buttons__logout")[0].setAttribute("class", "buttons__logout-active");
  }
}
localStorage.setItem('button', 'false');
logOut();
