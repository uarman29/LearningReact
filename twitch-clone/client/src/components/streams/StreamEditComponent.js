import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamFormComponent from './StreamFormComponent';

class StreamEditComponent extends React.Component
{
    componentDidMount()
    {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render()
    {
        if(!this.props.stream)
            return <div>Loading...</div>;

        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamFormComponent 
                    onSubmit={this.onSubmit}
                    initialValues = {{
                        title: this.props.stream.title, 
                        description: this.props.stream.description
                    }}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEditComponent);