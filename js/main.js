$(document).ready(function() {

    // Modal consult #Form1


    $('.header__consult').on('click', function() {
        $('.modal__consult').fadeIn('fast', function() {
            $('.modal__consult').css('display', 'flex');
        });
        $('html, body').css({ position: 'fixed'});
    });


    $(".modal__consult-button").on("click", function() {
        $(".modal__consult-body").hide("fast", function() {
            $(".modal__thanks-body").show("fast");
    })
    });


    $('.modal__consult-close').on('click', function (){
        $('.modal__consult').hide();
        $('html, body').css({ position: 'relative'});
    });

    // Form 2 


    $('.main1__test-options').on('click', function() {
        $('.main1__test-body').hide('fast', function() {
            $('.main2__test-body').fadeIn('fast')
        })
    });

    // Button 2  
    
    $(".next-2").attr('disabled', true);

    $('input[name="debt"]').change(function(){
        $(".next-2").attr('disabled', false); 
    })

    $('.next-2').on('click', function() {
        $('.main2__test-body').hide('fast', function() {
                $('.main3__test-body').fadeIn('fast');
    })
    });

    // Button 3 
    
    $(".next-3").attr('disabled', true);

    $('input[name="estate"]').change(function(){
        $(".next-3").attr('disabled', false); 
    })

    $('.next-3').on('click', function() {
        $('.main3__test-body').hide('fast', function() {
            $(".main4__test-body").fadeIn('fast');
    })
    });


    // Back buttons 


    $('.back-3').on('click', function() {
        $('.main3__test-body').hide('fast', function() {
            $('.main2__test-body').fadeIn('fast');
        })
    });

    $('.back-4').on('click', function() {
        $('.main4__test-body').hide('fast', function() {
            $(".main3__test-body").fadeIn('fast');
        })
    });


    // Button 4 


    $(".next-4").attr('disabled', true);

    $('input[name="deal"]').change(function(){
        $(".next-4").attr('disabled', false); 
    })


    $('.next-4').on('click', function() {
        $('.main4__test-body').hide('fast', function() {
            $(".main5__test-body").fadeIn('fast');
    })
    });


    // Button 5 


    $(".main5__test-options").attr('disabled', true);

    $('input[name="consult"]').change(function(){
        $(".main5__test-options").attr('disabled', false); 
    })

    $('.main5__test-options').on('click', function() {
        $('.main5__test-body').hide('fast', function() {
            $(".main6__test-body").fadeIn('fast');
    })
    });


    // Button 6
    

    $('.main6__test-options').on('click', function() {
        $('.main6__test-body').hide('fast', function() {
            $(".main7__test-body").fadeIn('fast');
    })
    });


    // Modal sale #Form3
    

    $(window).on('beforeunload', function () {
        $('.modal__sale').show('fast', function() {
            $('html, body').css({ position: 'fixed'});
            $('.modal__sale').css('display', 'flex');
        });
    });

    $('.modal__sale-btn').on('click', function () {
        $(".modal__sale-body").hide("fast", function() {
            $(".modal2__sale-body").show("fast")
        });
    });

    $('.modal2__sale-btn').on('click', function () {
        $(".modal2__sale-body").hide("fast", function() {
            $(".modal2__thanks-body").show("fast");
        });
    });

    $('.modal__sale-close').on('click', function (){
        $('.modal__sale').hide();
        $('html, body').css({ position: 'relative'});
    });


    // Phone mask


    $('.phone').mask('+7(999) 999-9999', {placeholder: '+7 (9--) --- -- --' });

  });