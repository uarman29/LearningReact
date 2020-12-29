import React from 'react';
import AccordionComponent from './AccordionComponent';
import SearchComponent from './SearchComponent';

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
]

const App = () =>{
    return(
        <div>
            <SearchComponent />
        </div>
    );
}

export default App;