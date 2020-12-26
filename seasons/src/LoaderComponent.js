import React from 'react';

const LoaderComponent = (props) =>
{
    return (
        <div className="ui active dimmer">
            <div className = "ui big text loader">
                {props.loadText}
            </div>
        </div>
    );
}

LoaderComponent.defaultProps = {loadText: "Loading..."};
export default LoaderComponent;