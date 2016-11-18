/* jslint node: true */
'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var vdiff = require('website-visual-diff');

// Use a function so that even if config doesn't exist,
// all other gulp tasks will work fine
function getDiffConfig() {
  var diffConfig = null;
  try {
    // You can pass config options (like EVENT_ID) as arguments
    // when calling gulp
    // gulp diff:compare --EVENT_ID=1
    diffConfig = require('./visual_diff/visual-diff-config')();
  } catch (e) {
    console.log('Config file not found');
  }

  if (diffConfig === null) {
    throw new Error('No visual diff config file');
  }

  return diffConfig;
}

// Caches screenshots
// RUN IT before making changes to CSS/HTML
gulp.task('diff:cache', function() {
  return vdiff.cache(getDiffConfig());
});

// Creates new screenshots and compares them with cached screenshots
gulp.task('diff:compare', function() {
  return vdiff.compare(getDiffConfig());
});

// Copies new screenshots into cache
// RUN IT if you want to update the cache with last taken screenshots
gulp.task('diff:copy', function() {
  return vdiff.copy(getDiffConfig());
});

// Removes all screenshots (both cache and current)
gulp.task('diff:clean', function() {
  return vdiff.clean(getDiffConfig());
});
