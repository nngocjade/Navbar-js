// classlist - shows/gets all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
 // // console.log(links.classList);
 // // console.log(links.classList.contains("links"));
 // // console.log(links.classList.contains("links"));
 // if(links.classList.contains('show-links')){
 //  links.classList.remove('show-links')
 // }else{
 //  links.classList.add("show-links");
 // }
links.classList.toggle("show-links");
});

$(document).addEventListener('click', function (e) {

    // If element is opened and click target is outside it, hide it
    if (links.is(':visible') && !links.is(e.target) && !links.has(e.target).length) {
        $links.hide();
    }
});
