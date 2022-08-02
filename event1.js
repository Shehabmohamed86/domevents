const btn =  document.querySelector('button');
btn.addEventListener('click',function(){
  alert('you clicked me');
})
btn.addEventListener('mouseover',function(){
  btn.innerText = 'stop touching me';
})
btn.addEventListener('mouseout',function(){
  btn.innerText = 'you clicked me';
})





const btn2 = document.querySelector('#click')
btn2.addEventListener('mouseover',function(){
  console.log('hi')
  const width = Math.floor(Math.random() * Window.innerWidth);
  const height = Math.floor(Math.random() * Window.innerHeight);
  btn2.style.left = `${width}px`
  btn2.style.top = `${height}px`
});

btn2.addEventListener('click',function(){
  btn2.innerText = 'you got me ';
  document.body.style.backgroundColor = 'green';
})