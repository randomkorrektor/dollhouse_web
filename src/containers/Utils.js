
const host = 'http://192.168.0.102:3000/';

export default {
    SignUp: (email, password, name) => {
        return fetch(`${host}api/auth`, {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                email,
                password,
                name,
            }),
            method: 'post'
        })
            .then(r => r.json())
            .then((r) => {
                if (r.success) {
                    return r.data;
                }
                throw r.error
            });
    },
    SignIn: (email, password) => {
        return fetch(`${host}api/auth?email=${email}&password=${password}`)
            .then(r => r.json())
            .then((r) => {
                if (r.success) {
                    return r.data;
                }
                throw r.error
            });
    },
    Profile: (session) => {
        return fetch(`${host}api/user?session=${session}`)
            .then(r => r.json())
            .then((r) => {
                if (r.success) {
                    return r.data;
                }
                throw r.error
            });
    },
    Products: () => {
        return fetch(`${host}api/product`)
            .then(r => r.json())
            .then((r) => {
                if (r.success) {
                    return r.data;
                }
                throw r.error
            });
    },
};