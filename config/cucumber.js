module.exports = {
  default: {
    
      formatOptions: {
          snippetInterface: "async-await"
      },
      paths: [
          "src/test/features/**/*.feature"
      ],
      dryRun: false,
      require: [
          "src/test/steps/*.js",
          "src/hooks/hooks.js"   
      ],
      format: [
          "progress-bar",
          "html:test-result/cucumber-report.html",
          "json:test-result/cucumber-report.json",
          "rerun:@rerun.txt",
     
      ],
      parallel: 2
  },
  rerun: {
      formatOptions: {
          snippetInterface: "async-await"
      },
      dryRun: false,
      require: [
          "src/test/steps/*.js",
          "src/hooks/hooks.js"   
      ],
      format: [
          "progress-bar",
          "html:test-result/cucumber-report.html",
          "json:test-result/cucumber-report.json",
          "rerun:@rerun.txt"
      ],
      parallel: 1
  }
}