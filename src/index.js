import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
     <div className="ui container comments">
         <ApprovalCard >
            <CommentDetail author="Sam" timeAgo="4:50pm" comment="Hey!" avatar={faker.image.avatar()} />
         </ApprovalCard>
         <ApprovalCard >
            <CommentDetail author="coco" timeAgo="6:51pm" comment="No" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="oreo" timeAgo="7:04pm" comment="Hola?" avatar={faker.image.avatar()} />
        </ApprovalCard>
     </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);