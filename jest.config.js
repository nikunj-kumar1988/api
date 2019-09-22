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
                "theme": "lightTheme"
            }
        ]
    ]
}