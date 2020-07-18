var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get('/:level', function (req, res, next) {
  var level = req.params.level;
  console.log('level',level);
  const part1DataJson = fs.readFileSync('./data/part1.json');
  const part1DataFormat = JSON.parse(part1DataJson);
  const { part1Data } = part1DataFormat;
  const dataOfLevel = part1Data.filter(data => data.level == level);
  res.send({ items: dataOfLevel, count: dataOfLevel.length });
});

router.get('/count/data', function (req, res, next) {
  const part1DataJson = fs.readFileSync('./data/part1.json');
  const part1DataFormat = JSON.parse(part1DataJson);
  const { part1Data } = part1DataFormat;
  const level1 = part1Data.filter(data => data.level == 1);
  const level2 = part1Data.filter(data => data.level == 2);
  const level3 = part1Data.filter(data => data.level == 3);
  const data = {
    1: level1.length,
    2: level2.length,
    3: level3.length
  }
  res.send(data);
});

module.exports = router;
