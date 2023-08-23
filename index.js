// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ("util")

const generateMarkdown = require("./utils/generateMarkdown");

const questions = ([
    { 
        type: "input", 
        message: "what is the title of your project?", 
        name: "Title"
    },
    {
        type: "input",
        message: "Provide a description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    }, 
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "Usage"
    }, 
    {
        type: "input",
        message: "Which License did you use for your project?",
        name: "License"
    },  
    {
        type: "input",
        message: "How can other developers contribute to your project?",
        name: "Contribute"
    }, 
    {
        type: "input",
        message: "Please provide examples on how to run your application",
        name: "Tests"
    }, 
    {
        type: "input",
        message: "What is your email?",
        name: "Questions"
    }, 
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file written successfully.');
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
