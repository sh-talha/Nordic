$(".toggle_menu").click(function(){
    $(".header_items").addClass("menu_show");
    });
    $(".clode_menu").click(function(){
    $(".header_items").removeClass("menu_show");
    });
// 
    $(".iwt_right .site-btn_icon, .iwt_left").click(function(){
    $(".project_modal").fadeIn();
    });
    $(".close_project").click(function(){
    $(".project_modal").fadeOut();
    });
    // 
    $(".mediapost_block .mp_img").click(function(){
    $('.invest_modals').fadeIn();
    });
    $(".close_projectInvest").click(function(){
    $(".invest_modals").fadeOut();
    });



    // discover slider

    $('.discover_slider').slick({
        dots: false,
        arrows:true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });



      // 

      $('.announcements_slider').slick({
        dots: false,
        arrows:true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $( ".tri_prv" ).on( "click", function() {
        $( ".announcements_slider .slick-prev" ).trigger( "click" );
      });
      $( ".tri_next" ).on( "click", function() {
        $( ".announcements_slider .slick-arrow" ).trigger( "click" );
      });
      $( ".tri_next" ).on( "click", function() {
        $( ".tri_prv" ).removeClass( "prv-disable" );
      });


      // 

      $( ".trading_tab ul li" ).on( "click", function() {
        $( this ).find('.Ttab_details').slideToggle();
      });

      $( ".cp_ok" ).on( "click", function() {
        $(".cookies_pie").hide();
      });

      // 
      $( ".toggle_menu" ).on( "click", function() {
        $( ".header_inner" ).addClass( "menu_show" );
      });
      $( ".close_menu" ).on( "click", function() {
        $( ".header_inner" ).removeClass( "menu_show" );
      });
