import React, { PureComponent, PropTypes } from 'react';

export default class Avatar extends PureComponent {
    render() {
        return (
            <img
                src={this.getPhotoUrl(this.props.author)}
                alt={'Photo of ' + this.props.author.Name}
                width={50}
                height={50}
                className="commentPhoto"
            />
        );
    }

    getPhotoUrl(author) {
        return 'https://avatars.githubusercontent.com/' + author.GithubUsername + '?s=50';
    }
}

Avatar.propTypes = {
    author: React.PropTypes.object.isRequired,
};