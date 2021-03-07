var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: () => {
        return 'mongo' + configValues.uname + configValues.pwd;
    }
}