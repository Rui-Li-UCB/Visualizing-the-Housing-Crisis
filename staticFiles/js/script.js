var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.cssText = "top:0px; z-index:5;";
  } else {
    document.getElementById("navbar").style.cssText = "top: -61px; z-index: 5;";
  }
  prevScrollpos = currentScrollPos;
};

const one = document.getElementById('house')
const cover = document.getElementById('cover')

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY
  let bottomHeight = window.innerHeight
  
  if(scrollY / bottomHeight <= 1){
    one.style.opacity = 1 - 7 * ( scrollY / bottomHeight )
    cover.style.position = 'relative'
  }
  else{
    cover.style.position = null
  }
});



$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}
