import React, { useState, useEffect, useRef } from 'react';

const DropdownComponent  = (props) =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() =>{
        const onBodyClick = (event) =>{
            if(ref.current && ref.current.contains(event.target))
                return;
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick ,{capture: true});

        // Good to do any cleanup in general: same as componentWillUnmount
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    },[]);

    const renderedOptions = props.options.map((option)=>
    {
        if(option.value === props.selected.value)
            return null;
        return(
            <div onClick = {() => props.onSelectedChange(option)} key = {option.value} className="item">
                {option.label}
            </div>
        );
    });


    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownComponent;