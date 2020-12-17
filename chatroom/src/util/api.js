import { instance } from './axios';

export function login(loginForm) {
    return instance.post('/login', JSON.stringify(loginForm)).then(res => res.data);
}

export function register(registerForm) {
    return instance.post('/register', JSON.stringify(registerForm)).then(res => res.data);
}

export function getVerification(username) {
    return instance.post('/verification', JSON.stringify({ username })).then(res => res.data);
}

export function usercheck() {
}

export function changepwd() {

}
