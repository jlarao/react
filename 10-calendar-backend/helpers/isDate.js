const moment = require('moment');

const isDate = (value, { req, location, path }) => {
    console.log(value);
    // console.log(req);
    // console.log(location);
    // console.log(path);

    if(!value) return true;

    const fecha = moment( value );
    if( fecha.isValid()){
        return true;
    }

    
}

module.exports = { isDate };