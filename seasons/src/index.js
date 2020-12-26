import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplayComponent from './SeasonDisplayComponent';
import LoaderComponent from './LoaderComponent';

class App extends React.Component
{
    // Can initialize state without the constructor
    //state = { lat: null, errorMessage: '' };

    // Used to initialize things and do one-time setup
    constructor(props)
    {
        super(props);
        this.state = { lat: null, errorMessage: '' };
    }

    // Good for one-time data loading when initial rendering is done
    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
        console.log("My component was rendered to the screen");
    }

    // Used when component is updated and good for repeated data-loading
    componentDidUpdate()
    {
        console.log("My component was just updated - it rerendered!");
    }

    // Used when component is removed
    componentWillUnmount()
    {
        console.log("My component was removed");
    }

    renderHelper()
    {
        if(this.state.errorMessage && !this.state.lat)
            return <div>Error: {this.state.errorMessage} </div>;
        
        if(!this.state.errorMessage && this.state.lat)
            return <SeasonDisplayComponent lat={this.state.lat} />;
        
        return <LoaderComponent loadText="Loading..."/>;
    }

    // Only create and return JSX here since it is called multiple times
    render()
    {
        return <div>{this.renderHelper()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));