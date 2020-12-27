import React from 'react';
import unsplash from '../api/unsplash';
import SearchBarComponent from './SearchBarComponent';
import ImageListComponent from './ImageListComponent';

class App extends React.Component
{
    state = { images: [] };

    // async onSearchSubmit(term) {}
    // We made this an arrow function because we need to bind the keyword "this"
    // ONLY NEEDED FOR CALLBACK FUNCTIONS
    onSearchSubmit = async (term) =>
    {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        }); // Could use .then(() => {}) instead of async await

        this.setState({ images: response.data.results });
    }

    render()
    {
        return(
            <div className ="ui container" style = {{marginTop:'10px'}}>
                <SearchBarComponent onCallback = {this.onSearchSubmit} />
                <ImageListComponent images = {this.state.images}/>
            </div>
        );
    }
}

export default App;
