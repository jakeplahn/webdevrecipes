(function($){
  function switchTab($container, $tab, $content, childSelector) {
    $container.find(childSelector).hide();
    $container.find('ul.tabs > li').removeClass('selected');

    $content.slideDown('fast');
    $tab.addClass('selected');
  }
  function createTab($container, $content, childSelector) {
    var tabTitle, $newTab;
    tabTitle = $content.data('tab-title');
    $newTab = $('<li>').addClass('tab').html(tabTitle);
    $newTab.on('click', function() {
      switchTab($container, $(this), $content, childSelector);
    });
    return $newTab;
  }
  function createTabs($container, childSelector) {
    var $list = $('<ul>').addClass('tabs');
    $container.find(childSelector).each(function () {
      var $newTab = createTab($container, $(this), childSelector);
      $list.append($newTab);
    });
    $container.prepend($list);
  }
})(jQuery);
