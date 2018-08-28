import React from 'react';
import Header from './Header/Header';
import HomeIcon from 'material-ui/svg-icons/action/home';
import QueueIcon from 'material-ui/svg-icons/av/queue';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import ProfileIcon from 'material-ui/svg-icons/action/account-box';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        const currentUser = this.props.currentUser;

        this.state = {
            currentUser,
            buttons: this.initButtons(currentUser),
            pinned: false
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.currentUser !== prevProps.currentUser){
            const currentUser = this.props.currentUser;

            this.setState({
                currentUser,
                buttons: this.initButtons(currentUser)
            });
        }
    }

    pin = (e) => {
        e.preventDefault();

        if (this.state.pinned) {
            this.setState({
                pinned: false
            });
        }
        else {
            this.setState({
                pinned: true
            });
        }
    }

    initButtons = currentUser => {
        if(currentUser){
            return [
                { name: 'Home', link: '/', icon: <HomeIcon/>,  menuItems: []},
                { name: 'New post', link: '/editor/',  icon: <QueueIcon/>,  menuItems: []},
                { name: 'Settings', link: '/settings/', icon: <SettingIcon/>,  menuItems: []},
                { name: `${currentUser.name}`, link: '/@' + currentUser.name, icon: <ProfileIcon/>,  menuItems: []},
                { name: 'Stories', menuItems: [                    
                    { link: '/storyEditor/', name: 'New Storie'},  
                    { link: '/settings/', name: 'Manage Stories'},  
                ]},
                { name: 'Logout', link: '/logout', icon: <ExitIcon/>, menuItems: [] }
            ]
        }

        return [
            { name: 'Home', link: '/', icon: <HomeIcon/>},
            { name: 'Sign In', link: '/login/'},
            { name: 'Sign Up', link: '/register/'}
        ]
    }


    render() {
        let {state} = this;

        return(
            <Header buttons={state.buttons} pinned={state.pinned} pin={this.pin}/>
        );
    }
}
