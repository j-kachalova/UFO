let lastA;
function resultTest(lastA){
  event.preventDefault();
  let qInputs = document.getElementsByName(lastA);
  let checkedValue = '';
  qInputs.forEach(function (input) {
    if (input.checked) checkedValue = input.value;
  });
  localStorage.setItem(lastA, checkedValue);
  let test1 = localStorage.getItem('test1-q1');
  let test2 = localStorage.getItem('test1-q2');
  let test3 = localStorage.getItem('test1-q3');
  if(test1=='ответ1' && test2 == 'ответ1'&& test3 == 'ответ1'){
      document.location.href='test_result1.html';
  }
  else document.location.href='test_result2.html';
}
