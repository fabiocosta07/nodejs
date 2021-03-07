var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: () => {
        return 'mongodb+srv://'+ configValues.uname+ ':'+ configValues.pwd +'@cluster0.zg9sn.mongodb.net/test?retryWrites=true&w=majority';
    }
}