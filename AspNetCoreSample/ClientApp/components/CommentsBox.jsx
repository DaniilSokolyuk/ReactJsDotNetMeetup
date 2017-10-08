import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class CommentsBox extends Component {

    state = {
        comments: this.props.initialComments,
        page: 1,
        hasMore: true,
        loadingMore: false,
    };

    loadMoreClicked = (evt) => {
        var nextPage = this.state.page + 1;
        this.setState({
            page: nextPage,
            loadingMore: true
        });

        var xhr = new XMLHttpRequest();
        xhr.open('GET', "/Home/Comments/?page=" + nextPage, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText);
            this.setState({
                comments: this.state.comments.concat(data.comments),
                hasMore: data.hasMore,
                loadingMore: false
            });
        };
        xhr.send();
        evt.preventDefault();
    };

    render() {

        var commentNodes = this.state.comments.map(comment =>
            <Comment author={comment.Author}>{comment.Text}</Comment>
        );

        return (
            <div className="comments">
                <h1>Comments</h1>
                <ol className="commentList">
                    {commentNodes}
                </ol>
                {this.renderMoreLink()}
            </div>
        );
    }

    renderMoreLink = () => {
        if (this.state.loadingMore) {
            return <em>Loading...</em>;
        } else if (this.state.hasMore) {
            return (
                <div onClick={this.loadMoreClicked}>
                    Load More
                </div>
            );
        } else {
            return <em>No more comments</em>;
        }
    };
}

CommentsBox.propTypes = {
    initialComments: PropTypes.array.isRequired
};
