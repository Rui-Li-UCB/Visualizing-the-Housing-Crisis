var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.cssText = "top:0px; z-index:4;";
  } else {
    document.getElementById("navbar").style.cssText = "top: -50px; z-index: 4;";
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
})