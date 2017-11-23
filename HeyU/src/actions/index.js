import * as constants from '../uitls/Constants'

export const login = (user) => {
  return {
    type: constants.ACTION_LOGIN,
    user
  }
}