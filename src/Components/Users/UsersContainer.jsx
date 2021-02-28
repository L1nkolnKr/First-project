import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow,setCurrentPage,toggleFollowingProgress} from '../../Redux/Users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors';


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.requestUsers(this.props.page, this.props.pageSize);
    }
    onPageChanged = (pageNumber) =>{
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
        render(){
            return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            page = {this.props.page}
            onPageChanged = {this.props.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            followingInProgress = {this.props.followingInProgress}

            /> 
            </>
        }
}


/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getCurrentPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        page: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
}

export default compose( connect (mapStateToProps, 
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))(UsersContainer)

