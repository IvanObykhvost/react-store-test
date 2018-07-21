import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile/Profile';
import api from '../../api';

class ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.match.params.username,
            currentUser: this.props.currentUser,
            profile: null,
            error: null,
            inProgress: true,
            isUser: false
        }
    }

    componentDidMount() {
        this.onLoad(this.state.username);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
            this.onLoad(this.props.match.params.username);
        }
    }

    onLoad = username => {
        this.setState({
            inProgress: true
        });

        api.Profile.get(username)
            .then(
                data => {
                    if(data.error) return Promise.reject(data.error);

                    this.setState({
                        profile: data.user,
                        inProgress: false
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    }

    handelClickFollowUser = () => {
        let request = null;
        let following = this.state.profile.following;
        if(following){
            request = api.Profile.unfollow(this.state.username);
        }
        else {
            request = api.Profile.follow(this.state.username);
        }

        following = !following;

        request
            .then(
                data => {
                    if(data.error) return ProgressEvent.reject(data.error);

                    this.setState({
                        profile: {
                            ...this.state.profile,
                            following
                        }
                    });
                }
            )
            .catch(e => this.setState({error: e}))
    } 

    render() {
        let {state} = this;
        if(state.error)
            return <div className="error">{state.error}</div>;

        

        return (
            !state.inProgress ? 
                <Profile 
                    profile={state.profile}
                    isUser={state.currentUser && state.profile ? state.currentUser.name === state.profile.name : false}
                    currentUser={state.currentUser}
                    onClickFollow={e => this.handelClickFollowUser()}
                />
                :
                <div>Please wait, profile is loading...</div>
        )
        
    }
}

const mapStateToProps = (state, props) => ({
    currentUser: state.common.currentUser
    
    // tabList: [
    //     { id: 0, title: "My Articles",  active: true},
    //     { id: 1, title: "Favorited Articles", active: false },
    // ],
})

// const mapDispatchToProps = (dispatch, props)  => ({
//     onLoad: () => {        
//         dispatch(profileLoad(props.username));
//         dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.ALL));
//     },
//     onTabClick: (id) => {
//         //My Articles
//         if (id === 0) {
//             dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.ALL));
//         }
//         //Favourite Atricles
//         else {
//             dispatch(postsGetByUsername(props.username, POSTS_REQUEST_TYPES.FAVOURITE));
//         }
//     },
//     //onUnload: () => dispatch(profilePageUnload())
//     onFollowUser: (user) => {       
//         //trying to unfollow
//         if (user.following) {
//             dispatch(followUser(user, FOLLOW_USER.UNFOLLOW));
//         }
//         //trying to follow
//         else {
//             dispatch(followUser(user, FOLLOW_USER.FOLLOW));
//         }
//     },    
// })

export default connect(
    mapStateToProps,
    null
)(ProfileContainer)
