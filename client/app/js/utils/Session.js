/**
 * Helper class for ease work with session
 */
export class Session {
    /**
     *
     */
    static getToken() {
        return localStorage.getItem( 'jwt' );
    }

    /**
     *
     * @param value
     */
    static setToken( value ) {
        debugger;
        localStorage.setItem( 'jwt', value );
    }

    /**
     *
     */
    static removeToken() {
        localStorage.removeItem( 'jwt' );
    }

    /**
     *
     */
    static clearSession() {
        localStorage.clear();
    }
}