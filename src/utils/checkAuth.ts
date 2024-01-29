export function checkAuth() {
  const token = window.localStorage.getItem('user-token')
  const uid = window.localStorage.getItem('uid')
  const role = window.localStorage.getItem('user-role')

  return {
    token,
    uid,
    role
  }
}
