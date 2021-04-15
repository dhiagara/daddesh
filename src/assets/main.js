// Sets interval...what is transition slide speed?
$('#myCarousel').carousel({
    interval:3000
});

// .sidebar .sidebar-right .footer-icons .icons a
$( ".sidebar .sidebar-right .produit-item .ajouter-pan" ).click(function() {
    alert( "Handler for .click() called." );
  });

//  change heart color
$(".sidebar .sidebar-right .footer-icons a  ").click(function(){

    if($(this).hasClass('expanded'))
    {
        $(this).addClass('collapsed').removeClass('expanded');
         }
    else
    {
        $(this).addClass('expanded').removeClass('collapsed');
       
    }

 
});