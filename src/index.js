var $ = require('jquery');
require('./less');

var User = function() {
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading <div> </div></h3></div>');
};

var user = new User();
user.get = function() {};
