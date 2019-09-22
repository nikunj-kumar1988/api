const config = require('config');

module.exports = {
    "testEnvironment": "node",
    "testpathIgnorePatterns": [
        "node_modules"
    ],
    "reporters": [
        "default", [
            "./node_modules/jest-html-reporter", {
                "pageTitle": "Test Report",
                "outputPath": "report/Test-report.html",
                "includeFailureMsg": true,
                "includeConsoleLog": true,
                "theme": "lightTheme"
            }
        ]
    ],
    "globals": {
        "ENV": config.get("app.baseurl"),
        "APIKEY": process.env.APIKEY,
        "APITOKEN": process.env.APITOKEN
    }
}