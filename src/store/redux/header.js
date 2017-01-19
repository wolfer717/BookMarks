import {GET_IS_LOGIN} from '../../common/Constant'

export const isLogin = () => ({
  type: GET_IS_LOGIN
})

const ACTION_HANDLERS = {
  [GET_IS_LOGIN]: (state, action) => {
    return Object.assign({}, {isLogin: true})
  }
}

const initialState = {isLogin: false}
export default function headerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
