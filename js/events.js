//define functions here
function getIt() {
  $('p').on('click', () => alert('Hey!'))
}

function frameIt() {
  $('img').on('load', e => e.addClass('tasty'))
}

$(document).ready(function(){

// call functions here

});
