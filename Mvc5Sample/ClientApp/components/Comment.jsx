import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

export default class Comment extends Component {
    render() {
        return (
            <li>
                <Avatar author={this.props.author} />
                <strong>{this.props.author.Name}</strong>{': '}
                {this.props.children}
            </li>
        );
    }
}

Comment.propTypes = {
    author: PropTypes.object.isRequired,
};