
$(document).ready(function(){
	
	$('.page-home').hide();
	setTimeout(function(){ 
		$('.img-logo').fadeOut(500);
		$('.page-home').show();
	},  3000);
	

	//mouseover
	    $('.zoom').hover(function() {
	        $(this).addClass('transition');
	    }, function() {
	        $(this).removeClass('transition');
	    });


	//filtro
	 $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  	});

  $('img').click(function(){
    //vacio los contenedores para que al presionar otra imagen no me aparescan de nuevo los mismos datos
    $('.title').empty();
    $('.message').empty();
    $('.address').empty();
    $('.cost').empty();

    //capturo los atributos
    var name = $(this).attr("data-name");
    var message = $(this).attr("data-message")
    var address = $(this).attr("data-address");
    var cost = $(this).attr("data-cost");

    //paso al modal los datos de los data en el index
    $('.title').append(name);
    $('.message').append(message);
    $('.address').append(address);
    $('.cost').append(cost);
  })

  });

