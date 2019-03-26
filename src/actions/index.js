// export const LOAD_PROJECT_DATA = "LOAD_PROJECT";

// export const loadProject = () => dispatch =>{
//   dispatch({
//     type : LOAD_PROJECT_DATA
//   })
// }

// export const simpleAction = (action) => dispatch => {
//   dispatch({
//    type: action.type,
//    data:   action.data
//   })
//  }

export const loadThings = () => ({
  type: 'LOAD_PROJECT',
});

export const thingsReceived = () => ({
  type: 'THINGS_RECEIVED',
});
export const loginSuccess = (data) => ({
  type : 'USER_LOGIN_SUCCESS',
  data : data
})
export const selectedProject = (data) =>({
  type : 'SELECTED_PROJECT',
  data : data
})