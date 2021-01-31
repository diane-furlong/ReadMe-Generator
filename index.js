const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter the installation instructions for your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter the usage information for your project.',
            name: 'usageInfo'
        },
        {
            type: 'input',
            message: 'Enter your contribution guidelines.',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Enter the test instructions of your project.',
            name: 'testInfo'
        },
        {
            type: 'list',
            message: 'Choose the license for your project.',
            choices: ['', '', '', '', '', '' , '', '', ''],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username.',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'email'
        }
    ])

    const generateHTML = (answer) =>
`# ${answer.title}
    
## Description
    
${answer.description}
    
## Table of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [Credits](#credits)
    
* [Tests](#tests)
    
* [License](#license)
    
* [Contact](#contact)
    
## Installation
    
${answer.installation}
    
## Usage
    
${answer.usageInfo}
    
## Credits
    
${answer.contribution}
    
## Tests
    
${answer.testInfo}
    
## License
    
${answer.license}
    
## Contact
    
GitHub username: ${answer.username}
Email address: ${answer.email}`

    promptUser()
    .then((answer) => writeFileAsync('README.md', generateHTML(answer)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err))