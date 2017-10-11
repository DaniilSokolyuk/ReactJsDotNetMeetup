import React, { Component } from 'react';
import { events } from '../common/utils' 
import { PhotoSwipe } from 'react-photoswipe';

export default class Gallery extends Component {
    state = {
        isOpen: false,
        items: {},
    };

    componentDidMount() {
        this.unsubscribe = events.subscribe('OpenPhotos', this.handleOpen);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleOpen(payload) {
        this.setState({
            isOpen: true,
            items: payload.items
        });
    }

    render() {
        const photoSwipeOptions = {
            index: 0,
            closeOnVerticalDrag: false,
        };

        return (
            <PhotoSwipe
                isOpen={this.state.isOpen}
                items={this.state.items}
               // onClose={this.hidePhotoSwipe}
                options={photoSwipeOptions}
            />
        );
    }
}
