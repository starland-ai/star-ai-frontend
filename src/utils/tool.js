import Cookies from 'js-cookie'

export function getToken() {
    let token = ''
    token = Cookies.get('token') === undefined ? '':  Cookies.get('token')
    localStorage.setItem('token', token)
    // basicStore.setToken(token)
    return token

}
export function removeToken() {
    document.cookie = 'token' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/; domain=.tryyourai.com;';
    // return Cookies.remove('try-your-ai-token')
}

