/**
 * Created by kaflan on 08.06.15.
 */
window.addEventListener('load', function load() {
  'use strict';
  var xmlReqvest = new XMLHttpRequest();
  var span = document.querySelectorAll('span');
  xmlReqvest.open('GET', 'https://cors-test.appspot.com/test', true);
  xmlReqvest.addEventListener('readystatechange', function hand1() {
    if (xmlReqvest.readyState === xmlReqvest.DONE && xmlReqvest.status === 200) {
      span[0].innerHTML = ('Ok').bold();
      span[0].style.color = 'green';
      return true;
    }
    span[0].innerHTML = ('Failed').bold();
    span[0].style.color = 'red';
  });
  xmlReqvest.send();
  xmlReqvest.open('POST', 'https://cors-test.appspot.com/test', true);
  xmlReqvest.addEventListener('readystatechancge', function hand2(){
    if (xmlReqvest.readyState === xmlReqvest.DONE && xmlReqvest.status === 200) {
      span[1].innerHTML = ('Ok').bold();
      span[1].style.color = 'green';
      return true;
    }
    span[0].innerHTML = ('Failed').bold();
    span[0].style.color = 'red';
  });
  xmlReqvest.send();
  xmlReqvest.open('WEIRD', 'https://cors-test.appspot.com/test', true);
  xmlReqvest.addEventListener('readystatechancge', function hand3(){
    if (xmlReqvest.readyState === xmlReqvest.DONE && xmlReqvest.status === 200) {
      span[2].innerHTML = ('Ok').bold();
      span[2].style.color = 'green';
      return true;
    }
    span[2].innerHTML = ('Failed').bold();
    span[2].style.color = 'red';
  });
});
