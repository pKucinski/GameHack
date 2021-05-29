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
var training = false;



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


    document.getElementById("typing-box").innerHTML += '<br><div class="click" onclick="training(1)">Programowanie: ' + programming + '</div>';
    document.getElementById("typing-box").innerHTML += '<br><div class="click" onclick="training(2)">Język angielski: '+ language + '</div>';
    document.getElementById("typing-box").innerHTML += '<br><div class="click" onclick="training(3)">Systemy operacyjne: '+os+ '</div><br>';
    document.getElementById("typing-box").innerHTML += static_text;

    window.scrollTo(0, document.body.scrollHeight);
  }

  else if (txt.includes("haxegon")) {
    document.getElementById("typing-box").innerHTML += '<br><div class="click" onclick="attack(1)">domowa_kamera</div><br>';
    document.getElementById("typing-box").innerHTML += '<div class="click" onclick="attack(2)">witryna_małego_sklepu</div><br>';
    document.getElementById("typing-box").innerHTML += '<div class="click" onclick="attack(3)">znany_aktor</div><br>';
    document.getElementById("typing-box").innerHTML += '<div class="click" onclick="attack(4)">wojewodzki_szpital</div><br>';
    document.getElementById("typing-box").innerHTML += '<div class="click" onclick="attack(5)">wielka_korporacja</div><br>';
    document.getElementById("typing-box").innerHTML += '<div class="click" onclick="attack(6)">rzadowe_serwery</div><br>';
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


function progress(skill){

    var progress_percent = '          ';

    var start = Date.now();
    var end = timeInMs + (skill * 10);



    if (progress_percent.charAt(i) == ' '){
        progress_percent[i] = '▋';
    }


    if (training == true){
        document.getElementById("typing-box").innerHTML = '[' + progress_percent + ']';
    }
    else {
     document.getElementById("typing-box").innerHTML = '[' + progress_percent + ']';
    }

}


function attack(lvl){
    var random = Math.random() * 100;

    if ((parseInt(programming) + parseInt(language) + parseInt(os) ) - lvl * 10 > random){
         document.getElementById("typing-box").innerHTML += 'Access <br>';
         document.getElementById("typing-box").innerHTML += 'Renown +' + lvl + "<br>";
    }
    else{
        document.getElementById("typing-box").innerHTML += 'Access denied <br>';
    }
        document.getElementById("typing-box").innerHTML += static_text;
        window.scrollTo(0, document.body.scrollHeight);
}


function bigImg(x) {
  x.style.width = "1224px";
}

function normalImg(x) {
  x.style.width = "1024px";
}