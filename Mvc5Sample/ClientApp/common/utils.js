import EventChannel from 'common/EventChannel'

export const events = new EventChannel();

export function debounce(callback, delay, context) {
    let timeout = null;
    return function () {
        if (timeout)
            clearTimeout(timeout);

        let args = arguments;
        timeout = setTimeout(() => {
            callback.apply(context || null, args);
            timeout = null;
        }, delay | 0);
    };
}