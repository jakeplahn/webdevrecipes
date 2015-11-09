/*globals React*/
var ProductSearch = React.createClass({
  componentDidMount: function() {
    $.ajax({
      url: '/products.json',
      dataType: 'json',
      success: function(data) {
        this.SetState({data: data});
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
      <div>
        <h1>Product Search</h1>
      </div>
    );
  }
});

React.render(<ProductSearch />, document.getElementById('content'));
