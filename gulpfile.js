/* jslint node: true */
'use strict';

var gulp = require('gulp');
var vdiff = require('website-visual-diff');

function getDiffConfig() {
  var diffConfig = null;
  try {
    diffConfig = require('./visual_diff/visual-diff-config')();
  } catch (e) {}

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
