'use strict';

module.exports = [
  'statistics.timings.pageTimings',
  'statistics.timings.rumSpeedIndex',
  'statistics.timings.fullyLoaded',
  'statistics.timings.firstPaint',
  'statistics.timings.timeToDomContentFlushed',
  'statistics.timings.timeToContentfulPaint',
  'statistics.timings.timeToFirstInteractive',
  'statistics.timings.loadEventEnd',
  'statistics.timings.userTimings',
  'statistics.timings.paintTiming',
  'statistics.timings.largestContentfulPaint.renderTime',
  'statistics.timings.elementTimings.*',
  'statistics.timings.firstInput.delay',
  'statistics.timings.firstInput.duration',
  'statistics.visualMetrics.*',
  'statistics.custom.*',
  'statistics.console.error',
  'statistics.console.warning',
  'statistics.cpu.categories.*',
  'statistics.cpu.events.*',
  'statistics.cpu.longTasks.*',
  'statistics.cdp.performance.RecalcStyleCount',
  'statistics.cdp.performance.JSHeapUsedSize',
  'statistics.cdp.performance.JSHeapTotalSize',
  'statistics.cdp.performance.FirstMeaningfulPaint',
  'statistics.errors',
  'statistics.axe.violations.*',
  'statistics.pageinfo.layoutShift',
  'statistics.extras.*'
];
