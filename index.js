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
            message: "What are the steps required to install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed.",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the license used for this project.",
            choices: ["Academic", "Apache", "BSD", "GNU", "MIT", "Mozilla 2.0", "None"]
        },
        {
            type: "input",
            name: "contribution",
            message: " List your collaborators, if any, with links to their GitHub profiles.",
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your README had been successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((data) => {
        writeToFile("GeneratedREADME.md", generateMarkdown(data));
    });

    
}

// Function call to initialize app
init();
