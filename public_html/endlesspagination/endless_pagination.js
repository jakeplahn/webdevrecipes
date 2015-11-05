/*globals jQuery,Handlebars,document,window*/
(function($) {
  "use strict";
  var currentPage = 0;
  var loadingPage = 0;
  function nextPageWithJSON() {
    currentPage += 1;
    var newURL = '/products.json?page=' + currentPage;

    var splitHref = document.URL.split('?');
    var parameters = splitHref[1];
    if (parameters) {
      parameters = parameters.replace(/[?&]page=[^&]*/, '');
      newURL += '&' + parameters;
    }
    return newURL;
  }
  function loadData(data) {
    $('#content').append(Handlebars.compile("{{#products}} \
      <div class='product'> \
        <a href='/productds/{{id}}'>{{name}}</a> \
        <br> \
        <span class='description'>{{description}}</span> \
        </div>{{/products}}")({ products: data }));
    if (data.length === 0) { $('#next_page_spinner').hide(); }
  }
  function updateContent(response) {
    loadData(response);
  }
  function getNextPage() {
    if (loadingPage === 0) {
      loadingPage++;
      $.getJSON(nextPageWithJSON(), {}, updateContent)
        .complete(function() { loadingPage--; });
      }
  }
  function readyForNextPage() {
    if (!$('#next_page_spinner').is(':visible')) {return;}

    var threshold = 200;
    var bottomPosition = $(window).scrollTop() + $(window).height();
    var distanceFromBottom = $(document).height() - bottomPosition;
    return distanceFromBottom <= threshold;
  }
  function observeScroll(event) {
    if (readyForNextPage()) {getNextPage();}
  }
  $(document).scroll(observeScroll);
  getNextPage();
}(jQuery));
