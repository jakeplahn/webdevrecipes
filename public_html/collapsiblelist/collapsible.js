(function($) {
  $.fn.prependToggleAllLinks = function () {
    var $container = $('<div').attr('class', 'expand_or_collapse_all');
    $container.append(
      $('<a>')
        .attr('href', '#')
        .html('Expand all')
        .click(handleExpandAll.bind(this))
  ).append(' | ')
  .append(
    $('<a>')
      .attr('href', '#')
      .html('Collapse all')
      .click(handleCollapseAll.bind(this))
    );
    this.prepend($container);
    return this;
  };
  
  function handleExpandAll(event) {
  }

  function handleCollapseAll(event) {
  }
})(jQuery);
