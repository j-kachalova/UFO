function NewsCard(title, kind, poster, country = "Россия", link) {
  this.title = title,
    this.kind = kind,
    this.poster = poster,
    this.country = country,
    this.link = link
}
let news = [
  new NewsCard("США ПЫТАЕТСЯ СКРЫТЬ ВСЮ ПРАВДУ! НО ТЕПЕРЬ ВЕСЬ МИР ЗНАЕТ ПРИЧИНУ ПОЯВЛЕНИЯ COVID-19!", "ufo",'url(https://cdn.pixabay.com/photo/2016/11/12/15/29/science-fiction-1819026_1280.jpg)', "США", 'article_1.html'),
  new NewsCard("УЧЕНЫЕ В ШОКЕ ОТ НОВОЙ НАХОДКИ", "ufo", "url(https://cdn.pixabay.com/photo/2018/07/14/11/33/network-3537401_1280.jpg)", "ЮАР", 'article_2.html'),
  new NewsCard("НЕОБЫЧНЫЙ ЛЕТАЮЩИЙ ОБЪЕКТ БЫЛ ЗАМЕЧЕН В НОЧНОМ НЕБЕ ДЕВЯТОГО УДЕЛА", "ufo", "url(https://img.gazeta.ru/files3/412/11497412/pentagon-80394_1920-pic4_zoom-1500x1500-99448.jpg)", "Россия", 'article_3.html'),
  new NewsCard("МЫ БЫЛИ В ШОКЕ, КОГДА НА ПУБЛИКЕ ПОЯВИЛСЯ ОН....", "ufo", "url(https://cdn-st1.rtr-vesti.ru/p/o_1554044.jpg)", "Не только Россия", 'article_4.html')
];

document.getElementById('test').addEventListener("submit", function (event) {
  event.preventDefault(); //Отменяет действия по умолчанию для данного события
  let q1Inputs = document.getElementsByName('q1');
  let checkedValue = '';
  q1Inputs.forEach(function (input) {
    if (input.checked) checkedValue = input.value;
  });
  localStorage.setItem('q1', checkedValue);

  getNewsCard();
});

let getNewsCard = function () {
  let result = [];
  if (localStorage.getItem('q1') == 'Россия') {
    result = news.filter(n => n.country == 'Россия');
  } else {
    result = news.filter(n => n.country != 'Россия');
  }

  let container = document.getElementById('news-cards');
  container.innerHTML = '';
  result.forEach(function (cardNews) {
    console.log('lhfkghc')
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
