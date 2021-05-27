var static_text = 'user@linux~$ $';

var txt = '';
var i = 0;
var speed = 50;

var user = 'user';
var email = 'mail'
var programming = 0;
var language = 0;
var os = 0;
var renown = 0;


function choose(text) {
	txt = text;
  typing();
}

function typing() {
  window.scrollTo(0, document.body.scrollHeight);
  if (i < txt.length) {
    document.getElementById("typing-box").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }

  else typeProfile();
}


function typeProfile() {
  if (txt.includes("profile")) {
    document.getElementById("typing-box").innerHTML += '<br>Nick: ' + user + '<br>';
    document.getElementById("typing-box").innerHTML += 'email : ' + email + ' <br>';
    document.getElementById("typing-box").innerHTML += 'Programowanie: ' + programming + ' <br>';
    document.getElementById("typing-box").innerHTML += 'Język angielski: '+ language + ' <br>';
    document.getElementById("typing-box").innerHTML += 'Systemy operacyjne: '+os+'<br>';
    document.getElementById("typing-box").innerHTML += 'Renoma: '+renown+'<br>';
    document.getElementById("typing-box").innerHTML += static_text;

    window.scrollTo(0, document.body.scrollHeight);
  }

  else if (txt.includes("training")) {
    document.getElementById("typing-box").innerHTML += '<br>Programowanie: ' + programming + ' <a>(Trenuj)gi</a> <br>';
    document.getElementById("typing-box").innerHTML += 'Język angielski: '+ language + ' <a>(Trenuj)</a> <br>';
    document.getElementById("typing-box").innerHTML += 'Systemy operacyjne: '+os+' <a>(Trenuj)</a> <br>';
    document.getElementById("typing-box").innerHTML += static_text;

    window.scrollTo(0, document.body.scrollHeight);
  }

  else if (txt.includes("haxegon")) {
    document.getElementById("typing-box").innerHTML += '<br><a href="">domowa_kamera</a><br>';
    document.getElementById("typing-box").innerHTML += '<a href="">witryna_małego_sklepu</a><br>';
    document.getElementById("typing-box").innerHTML += '<a href="">znany_aktor</a><br>';
    document.getElementById("typing-box").innerHTML += '<a href="">wojewodzki_szpital</a><br>';
    document.getElementById("typing-box").innerHTML += '<a href="">wielka_korporacja</a><br>';
    document.getElementById("typing-box").innerHTML += '<a href="">rzadowe_serwery</a><br>';
    document.getElementById("typing-box").innerHTML += static_text;

    window.scrollTo(0, document.body.scrollHeight);
  }

    else if (txt.includes("logout")) {

    window.scrollTo(0, document.body.scrollHeight);
    window.location.href = '/logout';
  }

  i=0;
}


function clean() {
  document.getElementById("typing-box").innerHTML = '';
  document.getElementById("typing-box").innerHTML = static_text;
}

function start(user, email, programming, language, os, renown) {
  static_text = user + '@linux~$ $';
  this.user = user;
  this.email = email;
  this.programming = programming;
  this.language = language;
  this.os = os;
  this.renown = renown;
  document.getElementById("typing-box").innerHTML = static_text;
}


