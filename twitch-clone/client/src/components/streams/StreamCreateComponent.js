import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamFormComponent from './StreamFormComponent';

class StreamCreateComponent extends React.Component
{
    onSubmit = (formValues) =>
    {
        this.props.createStream(formValues);
    }

    render()
    {
        return(
            <div>
                <h3>Create Stream</h3>
                <StreamFormComponent onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreateComponent);