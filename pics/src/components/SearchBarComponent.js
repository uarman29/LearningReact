import React from 'react';

class SearchBarComponent extends React.Component
{
    state = {term: ''};

    // This is an arrow function because the keyword "this" is not bound to the class
    // So when you use "this" an error is thrown
    // Arrow functions bind the function to class class whereas normal functions do not
    // ONLY NEEDED FOR CALLBACK FUNCTIONS
    onFormSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onCallback(this.state.term);
        // The above is how we implement callbacks which is by passing the callback function
        // as a prop and then calling it when needed
    }

    // We use a state variable for the user input and feed it back to the input so 
    // that we can have full control over the input such that we can force the input
    // to follow a specified format and so it rerenders when changed.
    render()
    {
        return(
            <div className = "ui segment">
                <form className = "ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value = {this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBarComponent;