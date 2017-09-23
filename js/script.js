$(document).ready(function() {

  var clipboard = new Clipboard('#copy-icon');
  clipboard.on('success', function(e) {
    e.clearSelection();
    $('#msg').finish();
    $('#msg').removeClass('error-msg').addClass('sucess-msg').text('Copied!').fadeTo(200, 1).fadeTo(2000, 0);
  });

  $('#frombase-icon').css('opacity', 0);
  $('#number-icon').css('opacity', 0);
  $('#tobase-icon').css('opacity', 0);
  $('.result').css('display', 'none');
  $('#msg').css('opacity', 0);
  $('#copy-icon').addClass('disabled');

  var ok_frombase;
  var ok_tobase;
  var ok_number;
  var fromBase;
  var toBase;
  var number;
  var regex;

  function checkFromBase(fromBase) {
    if(fromBase !== '') {
      $('#frombase-icon').removeClass('fa-times-circle').css('opacity', 0).addClass('fa-check-circle').fadeTo(200, 1);
      ok_frombase = true;
    } else {
      $('#frombase-icon').removeClass('fa-check-circle').css('opacity', 0).addClass('fa-times-circle').fadeTo(200, 1);
      ok_frombase = false;
    }

    return ok_frombase;
  }

  function checkToBase(toBase) {
    if(toBase !== '') {
      $('#tobase-icon').removeClass('fa-times-circle').css('opacity', 0).addClass('fa-check-circle').fadeTo(200, 1);
      ok_tobase = true;
    } else {
      $('#tobase-icon').removeClass('fa-check-circle').css('opacity', 0).addClass('fa-times-circle').fadeTo(200, 1);
      ok_tobase = false;
    }

    return ok_tobase;
  }

  function checkNumber(number) {
    if (number === '') {
      $('#number-icon').css('opacity', 0);
      ok_number = undefined;
    } else {
      fromBase = document.getElementById("frombase").value;

      switch (fromBase) {
        case '2': regex = /^[0-1]*$/; break;
        case '3': regex = /^[0-2]*$/; break;
        case '4': regex = /^[0-3]*$/; break;
        case '5': regex = /^[0-4]*$/; break;
        case '6': regex = /^[0-5]*$/; break;
        case '7': regex = /^[0-6]*$/; break;
        case '8': regex = /^[0-7]*$/; break;
        case '9': regex = /^[0-8]*$/; break;
        case '10': regex = /^[0-9]*$/; break;
        case '11': regex = /^[0-9Aa]*$/; break;
        case '12': regex = /^[0-9A-Ba-b]*$/; break;
        case '13': regex = /^[0-9A-Ca-c]*$/; break;
        case '14': regex = /^[0-9A-Da-d]*$/; break;
        case '15': regex = /^[0-9A-Ea-e]*$/; break;
        case '16': regex = /^[0-9A-Fa-f]*$/; break;
        case '17': regex = /^[0-9A-Ga-g]*$/; break;
        case '18': regex = /^[0-9A-Ha-h]*$/; break;
        case '19': regex = /^[0-9A-Ia-i]*$/; break;
        case '20': regex = /^[0-9A-Ja-j]*$/; break;
        case '21': regex = /^[0-9A-Ka-k]*$/; break;
        case '22': regex = /^[0-9A-La-l]*$/; break;
        case '23': regex = /^[0-9A-Ma-m]*$/; break;
        case '24': regex = /^[0-9A-Na-n]*$/; break;
        case '25': regex = /^[0-9A-Oa-o]*$/; break;
        case '26': regex = /^[0-9A-Pa-p]*$/; break;
        case '27': regex = /^[0-9A-Qa-q]*$/; break;
        case '28': regex = /^[0-9A-Ra-r]*$/; break;
        case '29': regex = /^[0-9A-Sa-s]*$/; break;
        case '30': regex = /^[0-9A-Ta-t]*$/; break;
        case '31': regex = /^[0-9A-Ua-u]*$/; break;
        case '32': regex = /^[0-9A-Va-v]*$/; break;
        case '33': regex = /^[0-9A-Wa-w]*$/; break;
        case '34': regex = /^[0-9A-Xa-x]*$/; break;
        case '35': regex = /^[0-9A-Ya-y]*$/; break;
        case '36': regex = /^[0-9A-Za-z]*$/; break;
        default: regex = /^[0-9A-Za-z]*$/;
      }

      if (number.match(regex)) {
        $('#number-icon').removeClass('fa-times-circle').css('opacity', 0).addClass('fa-check-circle').fadeTo(200, 1);
        ok_number = true;
      } else {
        $('#number-icon').removeClass('fa-check-circle').css('opacity', 0).addClass('fa-times-circle').fadeTo(200, 1);
        $('#msg').finish();
        $('#msg').removeClass('sucess-msg').addClass('error-msg').text('Input Invalid').fadeTo(200, 1).fadeTo(2000, 0);
        ok_number = false;
      }
    }

    return ok_number;
  }

  $('#frombase').on('change', function() {
    fromBase = document.getElementById("frombase").value;
    checkFromBase(fromBase);

    number = document.getElementById("number").value;
    checkNumber(number);
  });

  $('#tobase').on('change', function() {
    toBase = document.getElementById("tobase").value;
    checkToBase(toBase);
  });

  $('#number').on('keyup', function() {
    number = document.getElementById("number").value;
    checkNumber(number);
  });

  $('.input').on('blur change keyup', function() {
    toBase = document.getElementById("tobase").value;

    if(ok_frombase === true && ok_number === true && ok_tobase === true) {
      $('.result').show(200);
      $('#copy-icon').removeClass('disabled');
      var result = parseInt(number, fromBase).toString(toBase);
      document.getElementById("result-convert").innerHTML = result;
      document.getElementById("baseref").innerHTML = toBase;
    } else {
      $('.result').hide(200);
      $('#copy-icon').addClass('disabled');
    }
  });

});