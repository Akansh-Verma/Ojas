var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });



let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
menu.click=()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll=()=>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	if(window.scrollY>0){
		document.querySelector('.header').classList.add('active');		
	}
	else{
		document.querySelector('.header').classList.remove('active');
	}
}
window.onload=()=>{
		if(window.scrollY>0){
		document.querySelector('.header').classList.add('active');		
	}
	else{
		document.querySelector('.header').classList.remove('active');
	}
	}




window.addEventListener('scroll',function(){
  const navbar=document.querySelector('.navbar');
  navbar.classList.toggle("sticky",window.scrollY>50);
});
  const togglebar=document.querySelector('.toggle');
  const menu=document.querySelector('ol');
  function navToggle(){
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
  }

	var counter=1;
    setInterval(function(){
      document.getElementById('radio'+ counter).checked=true;
      counter++;
      if(counter>4){
        counter=1;
      }
    }, 3000);


/**Benefit Section Starts Here */
var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
window.onload = function(){
	var max = -219.99078369140625;
	forEach(document.querySelectorAll('.progress'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		value.querySelector('.value').innerHTML = percent + '%';
	});
}


/** Benefits section ends here */
