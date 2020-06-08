// // Usando hide e show
//
// // Quando clicco sull'icona del burgher menu rendo visibile la lista dei link
// $('.header-right i').click(
//   function() {
//     $('.hamburger-menu').show();
//   }
// )
//
// // Quando clicco sull'icona della X, nascondo la lista dei link
// $('.hamburger-menu .close').click(
//   function(){
//     $('.hamburger-menu').hide();
//   }
// )

// Usando la classe active già scritta in css
// Quando clicco sull'icona del burgher menu aggiungo la classe active
// già presente in css che da display: block.
$('.header-right i').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
)

// Quando clicco sull'icona della X, rimuovo la classe active
// di conseguenza torna display: none
$('.hamburger-menu .close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
)
