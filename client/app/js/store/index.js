if ( __DEVELOPMENT__ ) {
    module.exports = require( "./configureStore.dev.js" );
} else {
    module.exports = require( "./configureStore.prod.js" );
}

