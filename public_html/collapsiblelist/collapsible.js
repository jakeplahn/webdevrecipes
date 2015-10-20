(function($) {
  function handleExpandAll(event) {
    this.find('li.collapsed').toggleExapandCollapse(event);
  }

  function handleCollapseAll(event) {
    this.find('li.expanded').toggleExpandCollapse(event);
  }
  $.fn.makeCollapsible = function () {
    this.prependToggleAllLinks();
    this.find('li').click(function(event) {
      $(this).toggleExpandCollapse(event);
    });
    this.find('li ul')
      .parent(':not(.expanded)')
      .addClass('collapsed');

    return this;
  };
  $.fn.toggleExpandCollapse = function (event) {
    event.stopPropagation();
    if (this.find('ul').length > 0) {
      event.preventDefault();
      this.toggleClass('collapsed').toggleClass('expanded');
    }
    return this;
  };
  $.fn.prependToggleAllLinks = function () {
    var $container = $('<div>').attr('class', 'expand_or_collapse_all');
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
  
})(jQuery);
