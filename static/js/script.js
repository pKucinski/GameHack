var static_text = 'user@linux~$ $';

var txt = '';
var i = 0;
var speed = 50;

var user = 'user';
var email = 'mail'
var programming = 0;
var language = 0;
var ios = 0;
var charisma = 0;
var intelligence = 0;
var obstinacy = 0;
var money = 0;
var renown = 0;
var bug_fixed = 0;
var bug_used = 0;


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
    var a = "{{user.username}}";
    document.getElementById("typing-box").innerHTML += '<br>Nick:' + a + '<br>';
    document.getElementById("typing-box").innerHTML += 'email: '+user.mail+' <br>';
    document.getElementById("typing-box").innerHTML += 'Pieniądzę: '+profile.money+' <br>';
    document.getElementById("typing-box").innerHTML += 'Udanych włamań: 12<br>';
    document.getElementById("typing-box").innerHTML += 'znalezionych luk: 3<br>';
    document.getElementById("typing-box").innerHTML += 'Renoma: 23<br>';
    document.getElementById("typing-box").innerHTML += static_text;

    window.scrollTo(0, document.body.scrollHeight);
  }

  else if (txt.includes("training")) {
    document.getElementById("typing-box").innerHTML += '<br>Programowanie: 12lvl<br>';
    document.getElementById("typing-box").innerHTML += 'Język angielksi: 6lvl<br>';
    document.getElementById("typing-box").innerHTML += 'Systemy operacyjne: 3lvl<br>';
    document.getElementById("typing-box").innerHTML += 'Inteligencja: 2lvl<br>';
    document.getElementById("typing-box").innerHTML += 'Charyzma: 5lvl<br>';
    document.getElementById("typing-box").innerHTML += 'Szczęście: 1lvl<br>';
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

function start(user) {
  static_text = user + '@linux~$ $';
  this.user = user;
  document.getElementById("typing-box").innerHTML = static_text;
}


