// Animation On Scroll------------
AOS.init();
// Preloader---------
const loader = document.querySelector(".loader")
window.onload = () => {
    loader.classList.add("disppear")
}
// Navigation Js-----------
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = () => {
    if (document.body.scrollTop>80 || document.documentElement.scrollTop>80 ) {
        // document.querySelector("#navbar").style.padding="0px 0px ";
        document.querySelector("#logo").style.fontSize = "20px "; 
    }else{
        // document.querySelector("#navbar").style.padding="20px 0px ";
        document.querySelector("#logo").style.fontSize = "35px "; 
    }
}

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    // event.preventDefault();
    tabTrigger.show()
  })
})






