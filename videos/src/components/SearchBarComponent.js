import React from 'react';

class SearchBarComponent extends React.Component
{
    state = {inputTerm: ''};

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onCallback(this.state.inputTerm);
    }

    render()
    {
        return(
            <div className = "search-bar ui segment">
                <form className = "ui form" onSubmit={this.onFormSubmit}>
                    <div className = "field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.inputTerm} onChange={(e) => this.setState({inputTerm: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBarComponent;