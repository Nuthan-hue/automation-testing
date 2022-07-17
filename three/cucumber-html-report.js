const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "./reports/cucumbers-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "81",
},
device: "Local test machine",
platform: {
name: "windows",
version: "10",
},
},
});