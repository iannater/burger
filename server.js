let express = require('express');
const orm = require('./config/orm')

orm.selectAll('burgers')

