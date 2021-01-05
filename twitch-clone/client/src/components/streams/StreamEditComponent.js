import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamFormComponent from './StreamFormComponent';
import history from '../../history';

class StreamEditComponent extends React.Component
{
    componentDidMount()
    {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    componentDidUpdate()
    {
        if(this.stream && this.props.userId !== this.props.stream.userId)
        {
            history.push('/');
            return null;
        }
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
    return {userId: state.auth.userId, stream: state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEditComponent);