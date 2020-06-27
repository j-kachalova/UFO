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
function logOutB(page){
  document.location.href=page;
  localStorage.setItem('button', 'true');
  localStorage.setItem('logIn', 'false')
  logOut();
  comment();
}
function logOut(){
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
  comment();
}
function logIn(){
if(localStorage.getItem('logIn')=='true' && localStorage.getItem('button')=='true'){
    document.getElementsByClassName("buttons__signup")[0].setAttribute("class", "buttons__signup-off");
    document.getElementsByClassName("buttons__logout")[0].setAttribute("class", "buttons__logout-active");
  }
}

function wind(){
    if(localStorage.getItem('logIn')=='true') alert("Мы пошутили над вами. Вы не сможете открыть этот аккаунт");
    else alert('Зарегистрируйтесь, чтобы посмотреть этот аккаунт');
}
function comment(){
  let containerText = document.getElementsByClassName("false-text")[0];
  if(localStorage.getItem('logIn')=='true'){
    containerText.innerHTML = 'Мы пошутили над вами. Вы не сможете писать комментарии';
    containerText.setAttribute("class", "false-text1");
  }
  else containerText.innerHTML = 'Зарегистрируйтесь, чтобы оставлять комментарии';
    /*.setAttribute("class", "false-text1");*/
}
function profileWindow(){
  if(localStorage.getItem('logIn')=='true'){
    document.location.href='profile.html';
  }
  else alert('Для входа в профиль зарегистрируйтесь на сайте');
}

localStorage.setItem('button', 'false');
logOut();
comment();
