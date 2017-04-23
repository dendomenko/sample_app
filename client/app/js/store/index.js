if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.dev.js");
} else {
    module.exports = require("./configureStore.prod.js");
}
