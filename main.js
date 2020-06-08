// Quando clicco sull'icona del burgher menu rendo visibile la lista dei link
$('.header-right i').click(
  function() {
    $('.hamburger-menu').show();
  }
)

// Quando clicco sull'icona della X, nascondo la lista dei link
$('.hamburger-menu .close').click(
  function(){
    $('.hamburger-menu').hide();
  }
)
