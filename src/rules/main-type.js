"use strict";

let isString = require("./../validators/type").isString;
let LintIssue = require("./../LintIssue");
const lintId = "main-type";
const lintType = "error";
const nodeName = "main";
const message = "Type should be a string";
const ruleType = "type";

let lint = function(packageJsonData) {
  if (!isString(packageJsonData, nodeName)) {
    return new LintIssue(lintId, lintType, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.lintType = lintType;