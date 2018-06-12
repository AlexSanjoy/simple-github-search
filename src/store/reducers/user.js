import { FETCH_GH_USER_SUCCESS, FETCH_GH_USER_FAIL } from "../actions/UserActions";

const initialState = {
	name: 'Unknown',
	url: '---',
	avatar: '',
	error: ''
}

export default function user(state = initialState, action) {
	const payload = action.payload

	switch (action.type) {
		case FETCH_GH_USER_SUCCESS:
			return {
				...state,
				name: payload.name,
				url: payload.html_url,
				avatar: payload.avatar_url,
				error: ''
			}

		case FETCH_GH_USER_FAIL:
			return {
				...state,
				error: payload.message
			}

		default:
			return state
	}
}