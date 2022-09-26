// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of your project:",
        },
        {
            type: "input",
            name: "installation",
            message: "Provide a description of the installation instructions:",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the license used for this project.",
            choices: [  "Academic", "Apache 2.0", "BSD", "GNU", "MIT", "Mozilla 2.0", "Open"]
        },
        {
            type: "input",
            name: "contribution",
            message: "Who are the contributors to this project?",
        },
        {
            type: "input",
            name: "test",
            message: "Please provide the testing instructions fo this project.",
        },
        {
            type: "input",
            name: "git",
            message: "Please enter your GitHub username:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:",
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser();
    generateMarkdown();
}

// Function call to initialize app
init();
