//define functions here
function getIt() {
  $('p').on('click', () => alert('Hey!'))
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  $('form').on('keydown', key => {
    if(key.which === 'G') {
      alert('You pressed the G key')
    }
  })
}

$(document).ready(function(){

// call functions here

});
