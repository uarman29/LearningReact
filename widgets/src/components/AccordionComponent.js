import React, { useState } from 'react';

const AccordionComponent = (props) =>{

    // The useState function return an array and the argument is the 
    // default value of the first term in the array
    // So here we are assigning the state variable and its corresponding function at once
    // This is a hook and they are used in functional components
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) =>
    {
        setActiveIndex(index);
    };

    const renderedItems = props.items.map((item, index) =>{
        const active = (index === activeIndex ? ' active' : '');

        return(
            <React.Fragment key = {item.title}>
                <div onClick = {() => onTitleClick(index)} className={"title" + active}>
                    <i className = "dropdown icon"></i>
                    {item.title}
                </div>
                <div className = {"content" + active}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });


    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default AccordionComponent;