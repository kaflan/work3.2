/**
 * Created by kaflan on 08.06.15.
 */
window.addEventListener('load', function load() {
  'use strict';
  var xmlReqvest = new XMLHttpRequest();
  var xmlReq1 = new XMLHttpRequest();
  var xmlReq2 = new XMLHttpRequest();
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
    return false;
  });
  xmlReqvest.send();
  xmlReq1.open('POST', 'https://cors-test.appspot.com/test', true);
  xmlReq1.addEventListener('readystatechange', function hand2() {
    if (xmlReq1.readyState === xmlReq1.DONE && xmlReq1.status === 200) {
      span[1].innerHTML = ('Ok').bold();
      span[1].style.color = 'green';
      return true;
    }
    span[1].innerHTML = ('Failed').bold();
    span[1].style.color = 'red';
    return false;
  });
  xmlReq1.send();
  xmlReq2.open('WEIRD', 'https://cors-test.appspot.com/test', true);
  xmlReq2.addEventListener('readystatechange', function hand3() {
    if (xmlReq2.readyState === xmlReq2.DONE && xmlReq2.status === 200) {
      span[2].innerHTML = ('Ok').bold();
      span[2].style.color = 'green';
      return true;
    }
    span[2].innerHTML = ('Failed').bold();
    span[2].style.color = 'red';
    return true;
  });
  xmlReq2.send();
});
