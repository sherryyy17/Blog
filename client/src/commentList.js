import React from 'react';

export default ({ comments }) => {

    const renderedComments =Object.values(comments).map(comment => {
        let content;

        if(comment.status === 'approved'){
            content = comment.content;
        }
        if(comment.status === 'pending'){
            content = 'This comment is awaiting moderation';
        }
        if(comment.status === 'rejected'){
            content = 'This comment is rejected';
        }
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;

};