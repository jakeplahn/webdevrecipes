(function($) {
  $(document).keydown(function(e) {
    if($(document.activeElement)[0] === $(document.body)[0]){
      switch(e.keyCode){
      // In Page Navigation
        case 74: // j
          scrollNext();
          break;
        case 75: // k
          scrollToPrevious();
          break;
        // Between Page Navigation
        case 39: // right arrow
          loadNextPage();
          break;
        case 37: // left arrow
          loadPreviousPage();
          break;
        // Search
        case 191: // / (and ? with shift)
          if(e.shiftKey){
            $('#search').focus().val('');
            return false;
          }
          break;
      }
    }
  });
})(jQuery);
