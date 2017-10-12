import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends PureComponent {
    render() {
        return (
            <img
                src={this.props.picUrl}
                alt={'Photo of ' + this.props.name}
                width={50}
                height={50}
                className="commentPhoto"
            />
        );
    }
}

Avatar.propTypes = {
    picUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};