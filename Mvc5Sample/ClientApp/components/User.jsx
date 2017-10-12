import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar'
import { events } from '../common/utils'
import api, { APIActions } from '../common/api';

export default class User extends Component {

    handleClick = () => {

        api(APIActions.GET_USER, this.props.username)
            .then(
            (response) => {
                const data = JSON.parse(response);

                events.publish('OpenPhotos', data.items);

            },
            (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <li onClick={this.handleClick}>
                <Avatar picUrl={this.props.profile_pic_url} name={this.props.full_name} />
                <p>{this.props.username}</p>
                <p>{this.props.byline}</p>
                {this.props.is_private && <h3> Private </h3>}
                <strong>{this.props.full_name}</strong>
            </li>
        );
    }
}

User.propTypes = {
    full_name: PropTypes.string.isRequired,
    profile_pic_url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    is_private: PropTypes.bool.isRequired,
};