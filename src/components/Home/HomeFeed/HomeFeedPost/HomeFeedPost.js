﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function HomeFeedPost({ post }) {
    return (
        <div className='feed-post-preview'>
            <Link to={'/editor/' + post.id}>
                <h5>{post.title}</h5>
                <p>{post.topic}</p>
                <span>Read more</span>
                <ul className='tag-list'>
                    {post.tags.map((tag, ind) => <li key={ind}>{tag}</li>)}
                </ul>
            </Link>
        </div>    
    )
}

HomeFeedPost.propTypes = {
    post: PropTypes.object.isRequired
}