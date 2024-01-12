const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/multiple-cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '120'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Cypress BDD Cucumber report',
        data: [
            {label: 'Project Name', value: 'OrangeHRM'},
            {label: 'Release', value: '2.1'},
            {label: 'Cycle', value: 'Jan 2024'},
            {label: 'Execution Start Time', value: (new Date).toString()},
            {label: 'Execution End Time', value: (new Date).toString()}
        ]
    }
});