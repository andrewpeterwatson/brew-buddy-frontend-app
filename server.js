'use strict';

require('express')().use(require('express')
.static(__dirname + '/build')).listen(process.env.PORT || 8080, ()=> console.log('Client Server Up on 8080'));
