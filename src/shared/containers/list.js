//@flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/user';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import { fetchUsers } from '../redux/reducers/users';

type Props = {
  fetchUsers: PropTypes.func,
  items: PropTypes.array
};

class List extends Component<Props> {
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
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
