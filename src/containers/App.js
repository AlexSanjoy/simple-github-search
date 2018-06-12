import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import logo from '../assets/logo.svg'
import '../assets/App.css'
import { connect } from 'react-redux'
import User from '../components/User'
import * as userActions from '../store/actions/UserActions'

class App extends Component {
	render() {
		const {user} = this.props
		const {handleUserFetch} = this.props.userActions

		return (
			<div className="App">
				<img src={logo} className="App-logo" alt="logo" />
				<User {...user} handleUserFetch={handleUserFetch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		page: state.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
