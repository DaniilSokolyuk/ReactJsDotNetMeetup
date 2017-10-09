import React, { Component } from 'react';
import User from './User'
import { PhotoSwipe } from 'react-photoswipe';

export default class Instagram extends Component {
    state = {
        users: this.props.search.users,
        loading: false
    };

    handleChange = (evt) => {
        this.setState({
            loading: true
        });

        var xhr = new XMLHttpRequest();
        xhr.open('GET', "/Home/Search/?text=" + evt.target.value, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText);
            this.setState({
                users: data.users,
                loading: false
            });
        };
        xhr.send();
        evt.preventDefault();
    };

    render() {

        var userNodes = this.state.users.map(user =>
            <User user={user.user} key={user.user.pk}>{user.position}</User>
        );

        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <h1>Comments</h1>
                <ol className="userList">
                    {userNodes}
                </ol>
            </div>
        );
    }
}
