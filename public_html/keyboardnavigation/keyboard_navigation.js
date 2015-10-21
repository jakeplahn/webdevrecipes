(function($) {
  var currentEntry = -1;
  
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    var val = null;
    if (r !==null)
    {
      val = unescape(r[2]);
    }
    return val;
  }
  function getCurrentPageNumber() {
    return parseInt(getQueryString('page') || 1);
  }
  
  function loadNextPage() {
    var pageNumber = getCurrentPageNumber() + 1;
    var url = window.location.href;
    if (url.indexOf('page=') !== -1) {
      window.location.href = replacePageNumber(pageNumber);
    }
    else {
      var joinChar = (url.indexOf('?') > -1) ? '&' : '?';
      window.location.href += joinChar + pageNumber;
    }
  }

  function scrollToEntry(entryIndex) {
    var top = $("#" + $('.entry')[entryIndex].id).offset().top;
    $('html.body').animate({ scrollTop: top }, 'slow');
  }
  function scrollNext() {
    if($('.entry').size() > currentEntry + 1) {
      currentEntry++;
      scrollToEntry(currentEntry);
    }
  }
  function scrollToPrevious() {
    if(currentEntry > 0) {
      currentEntry--;
      scrollToEntry(currentEntry);
    }
  }
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
