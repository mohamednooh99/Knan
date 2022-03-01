$(function () {
     
 
$('.button-wrap .button').first().addClass('active');

$('.button-wrap .button').click(function(){
  var $this = $(this);
  $siblings = $this.parent().children(),
  position = $siblings.index($this);
  console.log (position);
  
  $('.cc-tt.content div').removeClass('active').eq(position).addClass('active');
  
  $siblings.removeClass('active');
  $this.addClass('active');
})

$('#slider').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  autoplayHoverPause: true,
  nav: true,
  responsive: {
      0: {
          items: 1,
          nav: true,
      },
      600: {
          items: 3,
          nav: true,
      },
      1000: {
          items: 3  ,
          nav: true,
      },
  }
});
// slider nav buttons 
$('#slider span[aria-label="Previous"]').html('<i class="icofont-thin-left"></i>');
$('#slider span[aria-label="Next"]').html('<i class="icofont-thin-right"></i>');



  /* */
  function triggerClick(elem) {
    $(elem).click();
  }
  var $progressWizard = $('.stepper'),
    $tab_active,
    $tab_prev,
    $tab_next,
    $btn_prev = $progressWizard.find('.prev-step'),
    $btn_next = $progressWizard.find('.next-step'),
    $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
    $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

  // To do:
  // Disable User select drop-down after first step.
  // Add support for payment type switching.

  //Initialize tooltips
  $tooltips.tooltip();

  //Wizard
  $tab_toggle.on('show.bs.tab', function (e) {
    var $target = $(e.target);

    if (!$target.parent().hasClass('active, disabled')) {
      $target.parent().prev().addClass('completed');
    }
    if ($target.parent().hasClass('disabled')) {
      return false;
    }
  });

  // $tab_toggle.on('click', function(event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     return false;
  // });

  $btn_next.on('click', function () {
    $tab_active = $progressWizard.find('.active');

    $tab_active.next().removeClass('disabled');

    $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
    triggerClick($tab_next);

  });
  $btn_prev.click(function () {
    $tab_active = $progressWizard.find('.active');
    $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
    triggerClick($tab_prev);
  });

});

function hideStage(stage){
	// you can validate here
	$('#stage'+stage).removeClass('active');
	$('#stage-'+stage+'-step').addClass('done');
}

function showStage(stage) {
	$('#stage'+stage).addClass('active');
	$('#stage-'+stage+'-step').addClass('active');
}