/**
 * Helper class for ease work with session
 */
export class Session {
    /**
     *
     */
    static getToken() {
        const token = localStorage.getItem( 'jwt' );
        return token !== null
            ? token
            : false;
    }

    /**
     *
     * @param value
     */
    static setToken( value ) {
        localStorage.setItem( 'jwt', value );
        return true;
    }

    /**
     *
     */
    static removeToken() {
        localStorage.removeItem( 'jwt' );
        return true;
    }

    /**
     *
     */
    static clearSession() {
        localStorage.clear();
        return true;
    }
}