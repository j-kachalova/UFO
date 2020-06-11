function NewsCard(title, kind, poster, country = "Россия", link = "#") {
  this.title = title,
    this.kind = kind,
    this.poster = poster,
    this.country = country,
    this.link = link
}
let news = [
  //нло
  new NewsCard("США ПЫТАЕТСЯ СКРЫТЬ ВСЮ ПРАВДУ! НО ТЕПЕРЬ ВЕСЬ МИР ЗНАЕТ ПРИЧИНУ ПОЯВЛЕНИЯ COVID-19!", "нло",'url(https://cdn.pixabay.com/photo/2016/11/12/15/29/science-fiction-1819026_1280.jpg)', "США", 'article_1.html'),
  new NewsCard("УЧЕНЫЕ В ШОКЕ ОТ НОВОЙ НАХОДКИ", "нло", "url(https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_1280.jpg)", "ЮАР", 'article_2.html'),
  new NewsCard("НЕОБЫЧНЫЙ ЛЕТАЮЩИЙ ОБЪЕКТ БЫЛ ЗАМЕЧЕН В НОЧНОМ НЕБЕ ДЕВЯТОГО УДЕЛА", "нло", "url(https://img.gazeta.ru/files3/412/11497412/pentagon-80394_1920-pic4_zoom-1500x1500-99448.jpg)", "Россия", 'article_3.html'),
  new NewsCard("МЫ БЫЛИ В ШОКЕ, КОГДА НА ПУБЛИКЕ ПОЯВИЛСЯ ОН....", "нло", "url(https://cdn-st1.rtr-vesti.ru/p/o_1554044.jpg)", "Не только Россия", 'article_4.html'),
  //йети
  new NewsCard("В ЯКУТИИ БЫЛИ ОБНАРУЖЕНЫ СЛЕДЫ НЕИЗВЕСТНОГО СУЩЕСТВА", "йети", "url(https://cdn.pixabay.com/photo/2016/08/25/17/34/bigfoot-1620140_1280.jpg)", "Россия", 'article_4.html')
];

let idOpen, idClose, idForm, idDel;
function openForm(idOpen, idClose, idForm, idDel){
  document.getElementById(idForm).style.display = 'block';
  document.getElementById(idOpen).style.display = 'none';
  document.getElementById(idClose).style.display = 'block';
  document.getElementById(idDel).style.display = 'block';
}

function closeForm(idOpen, idClose, idForm, idDel){
  document.getElementById(idForm).style.display = 'none';
  document.getElementById(idOpen).style.display = 'block';
  document.getElementById(idClose).style.display = 'none';
  document.getElementById(idDel).style.display = 'none';
}

function deleteD(){
  localStorage.clear();
}

document.getElementById('news-service').addEventListener("submit", function (event) {
  event.preventDefault();
  let q1Inputs = document.getElementsByName('qs1');
  let q2Inputs = document.getElementsByName('qs2');
  let checkedValue = '';
  q1Inputs.forEach(function (input) {
    if (input.checked) checkedValue = input.value;
  });
  localStorage.setItem('qs1', checkedValue);

  let checkedValue2 = '';
  q2Inputs.forEach(function (input) {
    if (input.checked) checkedValue2 = input.value;
  });
  localStorage.setItem('qs2', checkedValue2);

  getNewsCard();
});

let getNewsCard = function () {
  let result = [];
  if (localStorage.getItem('qs1') == 'Россия') {
    result = news.filter(n => n.country == 'Россия');
  } else{
  if (localStorage.getItem('qs1') == 'Заграница'){
    result = news.filter(n => n.country != 'Россия');
  }
  else{
    result = news;
  }}

  if (localStorage.getItem('qs2') == 'нло') {
    result = result.filter(r => r.kind == 'нло');
  } else {
  if((localStorage.getItem('qs2') == 'йети')){
    result = result.filter(r => r.kind != 'нло');
  }}

  let container = document.getElementById('news-cards');
  container.innerHTML = '';
  result.forEach(function (cardNews) {
    let text = document.createElement('p');
    text.classList.add('news__p');
    text.innerText = cardNews.title;
    let blockText = document.createElement('div');
    blockText.classList.add('news__text');
    blockText.appendChild(text);
    let img = document.createElement('div');
    img.classList.add('news__img');
    img.style.backgroundImage = cardNews.poster;
    let blockImage = document.createElement('div');
    blockImage.classList.add('news__block');
    blockImage.appendChild(img);
    blockImage.appendChild(blockText);
    let card = document.createElement('a');
    card.classList.add('news-link');
    card.href = cardNews.link;
    card.appendChild(blockImage);
    container.appendChild(card);
  });
}

getNewsCard();
