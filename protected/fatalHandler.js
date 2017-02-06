/* global process */
module.exports = (function () {
    process.on('uncaughtException',
        function (exception) {
            console.log({type: 'uncaughtException', error: exception, stack: exception.stack});
        }
    );
})();
