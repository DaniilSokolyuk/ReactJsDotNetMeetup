import React, { Component } from 'react';
import User from './User'
import { PhotoSwipe } from 'react-photoswipe';
import api, { APIActions } from '../common/api';
import { debounce } from '../common/utils';

export default class Instagram extends Component {
    state = {
        users: this.props.search.users,
        searchText: this.props.search.text,
        loading: false
    };

    componentWillUpdate(prevProps, prevState) {
        const { searchText } = this.state;
        if (prevState.searchText !== searchText && searchText) {
            this.request(searchText);
        }
    }

    request = debounce(searchText => {
        this.setState({
            loading: true
        });

        api(APIActions.SEARCH, searchText)
            .then(
            (response) => {
                const data = JSON.parse(response);
                this.setState({
                    users: data.users,
                    loading: false
                });
            },
            (error) => {
                console.log(error);
            });

    }, 200)

    handleChange = (evt) => {
        this.setState({
            searchText: evt.target.value,
        });
    };

    render() {

        var userNodes = this.state.users.map(user =>
            <User {...user.user} key={user.user.pk}></User>
        );

        return (
            <div>
                <input
                    type="text"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                />

                <h1>Users</h1>
                <ol className="userList">
                    {userNodes}
                </ol>
            </div>
        );
    }
}
