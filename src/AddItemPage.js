import React from 'react';
import { Link } from 'react-router-dom';
import { addItem } from './actions';
import { connect } from 'react-redux';

class AddItemPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleValueChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleAddItem(event) {
    event.preventDefault();
    this.props.handleAddItem(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <Link to="/items">list items</Link>
        <br />
        <br />
        <form onSubmit={this.handleAddItem}>
          <input onChange={this.handleValueChange} value={this.state.value} type="text" placeholder="item" />
          <button>add</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  items: state.items
});

const mapActionsToProps = {
  handleAddItem: addItem
};

export default connect(mapStateToProps, mapActionsToProps)(AddItemPage);
