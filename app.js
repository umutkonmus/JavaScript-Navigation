//Değişkenlerin tanımlanması
var seciliButon , hedefDiv, lastDiv,sayac=0;


$(document).ready(function() {
    $('body').addClass('js');
    var $menu = $('#menu'),
      $menulink = $('.menu-link');
    
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });});

//Sayfa tamamen yüklendiğinde tüm tuşlara birer kere bastırıp oluşabilecek bugları engellemeye çalışıyorum
$(document).ready(function(){
  if(sayac == 0){
    evSec();
    hakkindaSec();
    urunlerSec();
    blogSec();
    iletisimSec();
    lastDiv = null;
    sayac++;
  }
});

function begin(){
  if(lastDiv != null){
    lastDiv = hedefDiv;
    lastDiv.style.display="none";
  }else{
    lastDiv = hedefDiv;
  }
}

function evSec(){
  begin();
  seciliButon = document.querySelector('#linkEv');
  hedefDiv = document.querySelector('#ev');
  getir();
}

function hakkindaSec(){
  begin();
  seciliButon = document.querySelector('#linkHakkinda');
  hedefDiv = document.querySelector('#hakkinda');
  getir();
}

function urunlerSec(){
  begin();
  seciliButon = document.querySelector('#linkUrunler');
  hedefDiv = document.querySelector('#urunler');
  getir();
}

function blogSec(){
  begin();
  seciliButon = document.querySelector('#linkBlog');
  hedefDiv = document.querySelector('#blog');
  getir();
}

function iletisimSec(){
  begin();
  seciliButon = document.querySelector('#linkIletisim');
  hedefDiv = document.querySelector('#iletisim');
  getir();
}

function fix(){
  if (hedefDiv.style.display == "none") {
    hedefDiv.style.display = "block";
    hedefDiv.style.display = "none";
  } else {
    hedefDiv.style.display = "none";
    hedefDiv.style.display = "block";
  }
}

function getir(){
  fix();
  if (hedefDiv.style.display == "none") {
    hedefDiv.style.display = "block";
  } else {
    hedefDiv.style.display = "none";
  }
}
