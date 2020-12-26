import './SeasonDisplayComponent.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        displayName: "season summer",
        text: "Lets hit the beach",
        iconName: "massive sun icon"
    }, 
    Winter: {
        displayName: "season winter",
        text: "Brr, it is chilly",
        iconName: "massive snowflake icon"
    }
};

const getSeason = (lat, month) =>
{
    if(month > 2 && month < 9)
    {
        return lat > 0 ? 'Summer':'Winter';
    }
    else
    {
        return lat > 0 ? 'Winter':'Summer';
    }
}

const SeasonDisplayComponent = (props) =>{
    const season = seasonConfig[getSeason(props.lat, new Date().getMonth())];

    return (
        <div className = {season.displayName}>
            <i id = "icon-left" className={season.iconName} />
            <h1>{season.text}</h1>
            <i id = "icon-right" className={season.iconName} />
        </div>
    );
};

export default SeasonDisplayComponent;