import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
     <div className="ui container comments">
        <CommentDetail author="Sam" timeAgo="4:50pm" comment="Hey!" avatar={faker.image.avatar()} />
        <CommentDetail author="coco" timeAgo="6:51pm" comment="No" avatar={faker.image.avatar()} />
        <CommentDetail author="oreo" timeAgo="7:04pm" comment="Hola?" avatar={faker.image.avatar()} />
     </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);