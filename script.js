const button = document.querySelector('#button')
const dropdown = document.querySelector('#dropdown')
button.addEventListener("click", (e) => {
    dropdown.classList.toggle('hidden')
    if(dropdown2.classList.contains('hidden')) {

    } else {
        dropdown2.classList.toggle('hidden')
    }
    console.log('töötab')
})
const button2 = document.querySelector('#button2')
const dropdown2 = document.querySelector('#dropdown2')
button2.addEventListener("click", (e) => {
    dropdown2.classList.toggle('hidden')
    if(dropdown.classList.contains('hidden')) {

    } else {
        dropdown.classList.toggle('hidden')
    }
    console.log('töötab')
})

button(document).click(function(event) { 
  var button = button(event.target);
  if(!button.closest('#dropdown').length && 
  button('#dropdown').is(":visible")) {
    button('#dropdown').hide();
  }        
});