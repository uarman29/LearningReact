import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentComponent from './CommentComponent';
import ApprovalCardComponent from './ApprovalCardComponent';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCardComponent>
                <CommentComponent author={faker.name.firstName()} timeCreated="Today at 4:00PM" commentText="Nice!" avatarImg={faker.image.image()}/>
            </ApprovalCardComponent>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));