/* eslint-disable import/no-anonymous-default-export */

const {
  promises: { readdir },
} = require('fs');
const path = require('path');

const getComponents = async () =>
  (
    await readdir(path.join(__dirname, '../src/common/components'), {
      withFileTypes: true,
    })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((dirent) => dirent.startsWith('_'));

const getModules = async () =>
  (
    await readdir(path.join(__dirname, '../src/modules'), {
      withFileTypes: true,
    })
  )
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = { getComponents, getModules };
