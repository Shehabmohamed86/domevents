const creditInput = document.querySelector('#cc');
const check = document.querySelector('#terms');
const sellsOpt = document.querySelector('#sells');
const form = document.querySelector('#form-signup')

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('cc', creditInput.value);
  console.log('check', check.checked);
  console.log('sells', sellsOpt.value);
})