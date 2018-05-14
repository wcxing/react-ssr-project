import tokenAdd from './tokenAdd'

export const GET_ALL_MENU = 'GET_ALL_MENU'
export const GET_ALL_MENU_SUCCESS = 'GET_ALL_MENU_SUCCESS'
export const UPDATE_NAVPATH = 'UPDATE_NAVPATH'

//修改菜单
export function updateNavPath(path, key) {
  return {
    type: UPDATE_NAVPATH,
    payload: {
      data: path,
      key: key
    }
  }
}
//获取菜单
export function getAllMenu() {
  return {
    types: [GET_ALL_MENU, GET_ALL_MENU_SUCCESS, UPDATE_NAVPATH],
    promise: client => client.get('/merchantplatform/menuInfo/account', {params: tokenAdd()})
    //promise: client => api.get('/menu')
  }
}
