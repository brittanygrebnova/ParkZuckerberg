const initialState = {
  loading: false,
  allUsers: [],
  currentUser: null,
  currentUserFavorites: []
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_USERS':
      return { ...state, loading: true}
    case 'FETCH_USERS':
      return { ...state, loading: false, allUsers: action.payload}
    case 'RETRIEVING_SELECTED_USER':
      return { ...state, loading: true }
    case 'SET_USER':
      return { ...state, currentUser: action.payload }
    case 'ADD_TO_FAVORITES':
      return { ...state, currentUserfavorites: [...state.currentUserfavorites, action.payload] }
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, currentUserfavorites: state.currentUserfavorites.filter(park => park.id !== action.payload.id) }
    default: return state
  }
}
