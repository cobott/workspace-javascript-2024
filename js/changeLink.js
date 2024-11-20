// play with jQuery
$('body').hide().fadeIn(3000);

$('img').hide();

// test the event
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding....");
    $('body').children('p').slideToggle();
}

// test the each
$('a').each(change);
function change(){
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href',"https://www.google.com");
}