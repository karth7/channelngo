import React, {Component} from 'react';

class Example extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '"%PUBLIC_URL%\src\staticfiles\starry_night_fast2129-3000.mp4'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Example;