export const USER_LOGIN = 'USER_LOGIN'
export const OPEN_LOGIN_DIALOG = 'OPEN_LOGIN_DIALOG'
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG'

export const openDialog = () => ({
  type: OPEN_LOGIN_DIALOG
})

export const closeDialog = () => ({
  type: CLOSE_LOGIN_DIALOG
})

export const userLogin = (userName, pwd) => ({
  type: USER_LOGIN,
  payload: {userName, pwd}
})

const ACTION_HANDLERS = {
  [USER_LOGIN]: (state, action) => {
    return Object.assign({}, state, {isLogin: true, isOpen: false})
    // return Object.assign({}, {isLogin: action.payload})
  },
  [OPEN_LOGIN_DIALOG]: (state) => {
    return Object.assign({}, state, {isOpen: true})
  },
  [CLOSE_LOGIN_DIALOG]: (state) => {
    return Object.assign({}, state, {isOpen: false})
  }
}

const initialState = {isLogin: false, isOpen: false}
export default function rootReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
