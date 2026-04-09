const path = require('path');
const fs = require('fs');
const EventEmitter = require('events');
const os = require('os');

function logExecutionPaths() {
  console.log(`File: ${__filename}, Dir: ${__dirname}`);
}
logExecutionPaths();

