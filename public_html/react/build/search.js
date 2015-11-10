/*globals React*/
var ProductSearch = React.createClass({displayName: "ProductSearch",
  foo: function() {},
  getResults: function(query) {
    $.ajax({
      url: '/products.json?q=' + query,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    $.ajax({
      url: '/products.json',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Product Search"), 
        /* START_HIGHLIGHT */ 
        React.createElement(ProductSearchForm, {onSearchRequest: this.getResults}), 
        React.createElement(ProductList, {data: this.state.data})
      )
    );
  }
});

var ProductList = React.createClass({displayName: "ProductList",
  render: function() {
    var products = this.props.data.map(function (product) {
      return (
        React.createElement("tr", null, 
          React.createElement("td", null, product.name), 
          React.createElement("td", null, product.description), 
          React.createElement("td", null, product.price)
        )
      );
    });
    return (
      React.createElement("table", null, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "Name"), React.createElement("th", null, "Description"), React.createElement("th", null, "Price")
          )
        ), 
        React.createElement("tbody", null, 
          products
        )
      )
    );
  }
});

var ProductSearchForm = React.createClass({displayName: "ProductSearchForm",
  sendSearchQuery: function(e){
    e.preventDefault();
    var query = this.refs.query.getDOMNode().value.trim();
    this.props.onSearchRequest(query);
  },
  render: function() {
    return ( 
      React.createElement("form", {onSubmit: this.sendSearchQuery}, 
        React.createElement("label", {forInput: "query"}, "Keywords"), 
        React.createElement("input", {id: "query", type: "search", ref: "query"}), 
        React.createElement("input", {type: "submit", value: "search"})
      )
    );
  }
});

React.render(React.createElement(ProductSearch, null), document.getElementById('content'));
