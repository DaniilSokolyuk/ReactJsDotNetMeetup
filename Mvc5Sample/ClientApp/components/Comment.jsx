import React, { Component, PropTypes } from 'react';
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
    author: React.PropTypes.object.isRequired,
};