import React, { Component } from 'react';
import User from './User'
import { PhotoSwipe } from 'react-photoswipe';

 function debounce(callback, delay, context) {
    let timeout = null;
    return function() {
      if (timeout)
        clearTimeout(timeout);

     let args = arguments;
      timeout = setTimeout(() => {
        callback.apply(context || null, args);
        timeout = null;
      }, delay | 0);
    };
  }

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

    request = debounce(searchText =>
    {
        this.setState({
            loading: true
        });
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "/Home/Search/?text=" + searchText, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText);
            this.setState({
                users: data.users,
                loading: false
            });
        };
        xhr.send();
    }, 200)

    handleChange = (evt) => {
        this.setState({
            searchText: evt.target.value,
        });
    };

    render() {

        var userNodes = this.state.users.map(user =>
            <User user={user.user} key={user.user.pk}></User>
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
