﻿import { POSTS } from '../constant/constant';

const initialState = [
    {
        id: 1, title: 'Title 1', topic: 'Topic 1', tags: ['Tag 1'], message: 'Message 1'
    },
    {
        id: 2, title: 'Title 2', topic: 'Topic 2', tags: ['Tag 2'], message: 'Message 2'
    },
    {
        id: 3, title: 'Title 3', topic: 'Topic 3', tags: ['Tag 3'], message: 'Message 3'
    },    
]

export default function(state = initialState, action) {
    //console.log(action);
    switch (action.type) {
        case POSTS.POSTS_REQUEST:
            return [
                ...state,
                action.post
            ]
        default:
            return state;
    }
}