import React, { useState } from 'react';
import AccordionComponent from './AccordionComponent';
import SearchComponent from './SearchComponent';
import DropdownComponent from './DropdownComponent';
import TranslateComponent from './TranslateComponent';
import RouteComponent from './RouteComponent';
import HeaderComponent from './HeaderComponent';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is good'
    },
    {
        title: 'How do you use react',
        content: 'You just do it'
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
];
/*
const showAccordion = () =>{
    if(window.location.pathname === "/"){
        return <AccordionComponent items={items} />;
    }
}

const showList = () =>{
    if(window.location.pathname === "/list"){
        return <SearchComponent />;
    }
}

const showDropdown = () =>{
    if(window.location.pathname === "/dropdown"){
        return <DropdownComponent />;
    }
}

const showTranslate = () =>{
    if(window.location.pathname === "/translate"){
        return <TranslateComponent />;
    }
}*/

const App = () =>
{
    const [selected, setSelected] = useState(options[0]);
    return(
        <div>
            <HeaderComponent />
            <RouteComponent path="/">
                <AccordionComponent items={items} />
            </RouteComponent>
            <RouteComponent path="/list">
                <SearchComponent />
            </RouteComponent>
            <RouteComponent path="/dropdown">
                <DropdownComponent label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected}/>
            </RouteComponent>
            <RouteComponent path="/translate">
                <TranslateComponent />
            </RouteComponent>
        </div>
    );
};

export default App;