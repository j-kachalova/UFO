let idOpen, idClose, idMenu, idHeader, idMain, idFooter;
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
