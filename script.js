





function loadContent() {
  console.log('loadContents')
  $('body').prepend(hamburger)
  $('body').prepend(nav)
  $('.wrapper').prepend(navTab)
  $('.wrapper').append(nameBanner)

}

function normalizeView() {
  if(!$('.navDiv').hasClass('outOfSight')) {
    $('.navDiv').addClass('outOfSight')
  }

  if($('.wrapper').hasClass('moveWrapper')) {
    $('.wrapper').removeClass('moveWrapper')
  }
  if($('.navDiv').hasClass('fullMenu')) {
    $('.navDiv').removeClass('fullMenu')
  }
}



function ears() {

$('body').on('click', 'a.a1', (e) => {
  console.log('a1')
  normalizeView()
  $('.wrapper').replaceWith(aboutMe)
  $('.wrapper').prepend(navTab)
  $('.wrapper').addClass('about')
});
$('body').on('click', 'a.a2', (e) => {
  console.log('a2')
  normalizeView()
  $('.wrapper').replaceWith(projects)
  $('.wrapper').prepend(navTab)
});
$('body').on('click', 'a.a3', (e) => {
  console.log('a3')
  normalizeView()
  $('.wrapper').replaceWith(resume)
  $('.wrapper').prepend(navTab)
  // $('.wrapper').append(insert returned fetched code here)
});
$('body').on('click', 'a.a4', (e) => {
  console.log('a4')
  normalizeView()
  $('.wrapper').replaceWith(contact)
  $('.wrapper').prepend(navTab)
  $('.wrapper').addClass('contact')
});
$('body').on('click', 'div.navTab', (e) => {
  console.log('a4')
  
  $('.navDiv').toggleClass('outOfSight')
  $('.wrapper').toggleClass('moveWrapper')
  
});

}

function handleMobile() {

	if($(window).width() < 800) {
		$('.navMenu').addClass('fullMenu')
  }
  else{
  $('.navMenu').removeClass('fullMenu')
  }

  $('body').on('click', 'div.hamburger', (e) => {
    console.log('a4')
    $('.navDiv').toggleClass('fullMenu')

    
  });

}


$(document).ready(() => {
  loadContent()
  ears()
  handleMobile()
});

