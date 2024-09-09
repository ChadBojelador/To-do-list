particlesJS.load('particles-js', 'particles.json'), function() {
  console.log('particles.js loaded - callback');}

document.body.addEventListener(`click`, function(){
  const titleElement = document.getElementById(`scroll1`);
  if(titleElement){
    titleElement.scrollIntoView({behavior:"smooth"})
  }
});


document.content.addEventListener(`click`, function(){
  const md = document.getElementById(`scroll2`);
  if(titleElement){
    titleElement.scrollIntoView({behavior:"smooth"})
  }
});