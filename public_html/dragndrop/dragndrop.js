/*global $,document */

function observeMove(event, cursorOffset, cursorPosition, draggableWindow) {
  event.preventDefault();
  var left = cursorPosition.pageX - cursorOffset.pageX;
  var top = cursorPosition.pageY - cursorOffset.pageY;
  draggableWindow.css('left', left).css('top', top);
}

function unbindMovePopup(event, draggableWindow) {
  $(document).unbind('mousemove');
  draggableWindow.removeClass('dragging');
}

function dragPopup(event) {
  event.preventDefault();
  var handle = $(event.target);
  var draggableWindow = $(handle.parents('.draggable')[0]);
  draggableWindow.addClass('dragging');
  var cursor = event;
  var cursorOffset = {
    pageX: cursor.pageX - parseInt(draggableWindow.css('left'),10),
    pageY: cursor.pageY - parseInt(draggableWindow.css('top'),10)
  };
    $(document).mousemove(function(moveEvent) {
      observeMove(moveEvent, cursorOffset,
        moveEvent, draggableWindow);
    });
  $(document).mouseup(function(up_event) {
    unbindMovePopup(up_event, draggableWindow);
  });
}

function updatePopupContent(data) {
  var popupWindow = $('div.popup_window');
  popupWindow.find('.body').html($(data));
  popupWindow.fadeIn();
}

function updatePopup(event) {
  $.get($(event.target).attr('href'), [], updatePopupContent);
  return false;
}

function hidePopup() {
  $(this).parents('.popup_window').fadeOut();
  return false;
}

$('.draggable .handle').on('mousedown', dragPopup);
$('.popup').on('click', updatePopup);
$('.popup_window .close').on('click', hidePopup);
