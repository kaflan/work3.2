/**
 * Created by kaflan on 08.06.15.
 */
window.addEventListener('load', function load() {
  'use strict';
  var i;
  var xmlReqvest = new XMLHttpRequest();
  var span = document.querySelectorAll('span');
  xmlReqvest.open('GET', 'https://cors-test.appspot.com/test', true);
  xmlReqvest.addEventListener('readystatechange', function hand() {
    if (xmlReqvest.readyState === xmlReqvest.DONE && xmlReqvest.status === 200) {
      for (i = 0; i < span.length; i++) {
        span[i].innerHTML = ('Ok').bold();
        span[i].style.color = 'green';

      }
      return false;
    }
    for (i = 0; i < span.length; i++) {
      span[i].innerHTML = ('Fail').bold();
      span[i].style.color = 'red';
    }
  });
  xmlReqvest.send();

});
//spanAll[1].innerText = ('Ok').bold();
//spanAll[1].style.color = 'green';
//spanAll[2].innerText = ('Failed').bold();
//spanAll[2].style.color = 'red';