var str = require('./constant');

var User = function() {
    // console.log(str);
    $('body').html(str);
};

var user = new User();
user.get = function() {};
