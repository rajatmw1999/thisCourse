
var $jq = jQuery.noConflict();
$jq(document).ready(function(){
    $jq('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



function testimonialFeature(){
        if(tx_activeIndex > tx_length){tx_activeIndex = 0;}
        if(tx_activeIndex < 0){tx_activeIndex = tx_length;}
        $('#tfeature-testimonial_content').html(testimonials[tx_activeIndex]["content"]);
        $('#tfeature-testimonial_author').html(testimonials[tx_activeIndex]["author"]);

        //set images
        $('.tfeature-images_item').removeClass('left').removeClass('center').removeClass('right');
        $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').addClass('center');
        $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').prev().addClass('left');
        $('.tfeature-images_item[data-id="'+tx_activeIndex+'"]').next().addClass('right');

        //infinity look
        if(tx_activeIndex == 0){ $('.tfeature-images_item:last-of-type').addClass('left'); }
        if(tx_activeIndex == tx_length){ $('.tfeature-images_item:first-of-type').addClass('right'); }

    }

    var testimonials = [
        {"author": "Han Solo", "content": "Content One", "image": "https://brash-ui.firebaseapp.com/img/test-pic1.png"},
        {"author": "Princess Leia", "content": "Content Two", "image": "https://brash-ui.firebaseapp.com/img/test-pic2.jpg"},
        {"author": "Rey", "content": "Content Three", "image": "https://brash-ui.firebaseapp.com/img/test-pic3.png"},
        {"author": "Finn", "content": "Content Four", "image": "https://brash-ui.firebaseapp.com/img/test-pic4.png"},
        {"author": "Poe", "content": "Content Five", "image": "https://brash-ui.firebaseapp.com/img/test-pic5.png"},
    ];

    //set initial content
    tx_activeIndex = 2;
    tx_length = parseInt(testimonials.length)-1;
    testimonialFeature();

    //make image elements
    for(var i=0; i<testimonials.length; i++) {
        switch(true){
            case(i==1):
                var placement = "left";
                break;
            case(i==2):
                var placement = "center";
                break;
            case(i==3):
                var placement = "right";
                break;
            default:
                var placement = "";
                break;
        }
        $('#tfeature-images').append('<div class="tfeature-images_item '+placement+'" data-id="'+i+'"><img src="'+testimonials[i]["image"]+'" alt=""></div>')
    }

    $('#tfeature_prev').on('click', function(e){
        e.preventDefault();
        tx_activeIndex = tx_activeIndex-1;
        testimonialFeature();
    });

    $('#tfeature_next').on('click', function(e){
        e.preventDefault();
        tx_activeIndex = tx_activeIndex+1;
        testimonialFeature();
    });


    // number count for stats, using jQuery animate

    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });


    });