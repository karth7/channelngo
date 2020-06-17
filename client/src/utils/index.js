const TOKEN_KEY = 'jwt';
const TOKEN_KEY2 = 'mail';
const TOKEN_KEY3 = 'name';

export const login = (mail, name) => {

    localStorage.setItem('mail', mail);
    localStorage.setItem('name', name);
}



export const logout = () => {

    localStorage.removeItem('mail');
    localStorage.removeItem('name');
}


export const isLogin = () => {
    if (localStorage.getItem('mail')) {
        return true;
    }

    return false;
}

