/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';
var dht = require('dht-sensor');
function Sensor(/* options */) {
  // nothing todo
}
var current = {
  temperature:0,
  humidity:0
}
Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  try{
    current = dht.read(11, 14); // 11 : DHT11, 18 : BCM GPIO
  }catch(err){
    console.log(err);
  }
  
  
  callback(null, {
    temperature: current.temperature,
    humidity: current.humidity
  });
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = Sensor;
