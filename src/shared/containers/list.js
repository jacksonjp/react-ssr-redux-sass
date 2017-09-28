import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/user';
import 'isomorphic-fetch';

import { fetchUsers } from '../redux/reducers/users';

class List extends Component {
  static fetchData(store) {
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        {this.props.items.map(item => <User key={item.id} user={item} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.users.items });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
