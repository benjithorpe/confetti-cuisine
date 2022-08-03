'use strict';

// Import modules
const fs = require('fs');
const httpStatus = require('http-status-codes');
const contentTypes = require('./contentTypes');

exports.getFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      res.writeHead(
        httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
        contentTypes.html
      );
      res.end('There was an error serving content!');
    }

    res.end(data);
  });
};
