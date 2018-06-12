import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
	state = {
		user: ''
	}

	handleChange = (e) => {
		this.setState({user: e.target.value})
	}

	getUser = (e) => {
		e.preventDefault();
		this.props.handleUserFetch(this.state.user)
	}

	render() {
		const {name, url, avatar, error} = this.props

		return (
			<div>
				<form onSubmit={this.getUser}>
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<button type="submit">FIND USER</button>
				</form>
				{error ?
					<h3>Error: <span style={{color: 'red'}}>{error}</span></h3>
					:
					<div>
						{avatar ? <img src={avatar} alt="Avatar" /> : null}
						<h1>Name: <span>{name ? name : 'Unknown'}</span></h1>
						<h2>URL: <a href={url}><span>{url}</span></a></h2>
					</div>
				}
			</div>
		)
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	handleUserFetch: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
}