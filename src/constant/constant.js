﻿export const EDITOR_REQUEST = "EDITOR_REQUEST"
export const EDITOR_RESPONSE = "EDITOR_RESPONSE"
export const EDITOR_POST_REQUEST = "EDITOR_POST_REQUEST"
export const EDITOR_POST_RESPONSE = "EDITOR_POST_RESPONSE"

export const EMPTY_POST_INITIALIZE = "EMPTY_POST_INITIALIZE"
export const EDITOR_POST_CHANGE = "EDITOR_POST_CHANGE"

export const POST_REQUEST = "POST_REQUEST"
export const POST_RESPONSE = "POST_RESPONSE"

export const APP_LOAD_REQUEST = "APP_LOAD_REQUEST"
export const APP_LOAD_RESPONSE = "APP_LOAD_RESPONSE"

export const AUTH_REQUEST = "AUTH_REQUEST"
export const AUTH_RESPONSE = "AUTH_RESPONSE"

export const SETTINGS_REQUEST = "SETTINGS_REQUEST"
export const SETTINGS_RESPONSE = "SETTINGS_RESPONSE"

export const PROFILE_REQUEST = "PROFILE_REQUEST"
export const PROFILE_RESPONSE = "PROFILE_RESPONSE"

export const POSTS_REQUEST = "POSTS_REQUEST"
export const POSTS_RESPONSE = "POSTS_RESPONSE"

export const POST = {
    POST_REQUEST,
    POST_RESPONSE
}

/*--------------------------EDITOR---------*/

export const EDITOR = {
    //need it when post ADD
    EMPTY_POST_INITIALIZE,   

    //use them when post UPDATE
    EDITOR_POST_REQUEST,
    EDITOR_POST_RESPONSE,

    //use it when post field is updated on form 
    EDITOR_POST_CHANGE,

    EDITOR_REQUEST,
    EDITOR_RESPONSE,   
}

//EDITOR ASYNCH  REQUEST TYPES:
export const ADD = "ADD"
export const UPDATE = "UPDATE"

//EDITOR ASYNCH REQUEST TYPES:
export const EDITOR_REQUEST_TYPES = {
    ADD,
    UPDATE
}


export const AUTH = {
    AUTH_REQUEST,
    AUTH_RESPONSE
}

export const APP = {
    APP_LOAD_REQUEST,
    APP_LOAD_RESPONSE
}

export const SETTINGS = {
    SETTINGS_REQUEST,
    SETTINGS_RESPONSE
}

export const PROFILE = {
    PROFILE_REQUEST,
    PROFILE_RESPONSE
}

//--------------------------POSTS---------------------------------

export const POSTS = {
    POSTS_REQUEST,
    POSTS_RESPONSE
}

//POSTS ASYNCH  REQUEST TYPES:
export const ALL = "ALL"
export const FOLLOW = "FOLLOW"
export const FAVOURITE = "FAVOURITE"

//POSTS ASYNCH REQUEST TYPES:
export const POSTS_REQUEST_TYPES = {
    ALL,
    FOLLOW,
    FAVOURITE
}


