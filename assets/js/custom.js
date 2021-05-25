
	
// one page scroling nav//

function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 1000);
  }
  $('[data-scroll]').on('click', scrollToSection);
  
