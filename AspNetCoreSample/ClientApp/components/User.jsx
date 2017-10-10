import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar'

export default class User extends Component {
    render() {
        return (
            <li>
                <Avatar picUrl={this.props.user.profile_pic_url} name={this.props.user.full_name} />
                <p>{this.props.user.username}</p>
                <p>{this.props.user.byline}</p>
                {this.props.user.is_private && <h3> Private </h3>}
                <strong>{this.props.user.full_name}</strong>
                {this.props.children}
            </li>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};