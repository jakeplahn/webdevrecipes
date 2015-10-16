(function($){
  function setupButton() {
    var $pauseButton, $slideShow;
    
    $slideShow = $('#slideshow');
    $pauseButton = $('<button>Pause</button>');

    function isPaused($player) {
      return $player.is('.cycle-paused');
    }

    function playSlideShow($player, $button) {
      $player.cycle('resume');
      $button.html('Pause');  
    }

    function pauseSlideShow($player, $button) {
      $player.cycle('pause');
      $button.html('Resume');
    }

    $pauseButton.on('click', function() {
      if (isPaused($slideShow)) {
        playSlideShow($slideShow, $(this));
      } else {
        pauseSlideShow($slideShow, $(this));
      }
    });

    $pauseButton.insertAfter($slideShow);
  }
  $('#slideshow').cycle({fx: 'fade'});
  setupButton();
})(jQuery);
