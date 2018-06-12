export const FETCH_GH_USER = 'LOGIN_REQUEST'
export const FETCH_GH_USER_SUCCESS = 'LOGIN_SUCCES'
export const FETCH_GH_USER_FAIL = 'LOGIN_FAIL'

function getUser() {
	return {
		type: FETCH_GH_USER
	}
}

function getUserSucces(json) {
	return {
		type: FETCH_GH_USER_SUCCESS,
		payload: json
	}
}

function getUserFailed(json) {
	return {
		type: FETCH_GH_USER_FAIL,
		payload: json
	}
}

export function handleUserFetch(user) {
	return dispatch => {
		dispatch(getUser())

		return fetch(`https://api.github.com/users/${user}`)
			.then(res => {
				if (!res.ok) throw res
				return res.json()
			})
			.then(json => dispatch(getUserSucces(json)))
			.catch(err => err.json().then(errMsg => dispatch(getUserFailed(errMsg))))
	}
}