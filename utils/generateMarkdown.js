// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ![badge](https://img.shields.io/badge/License-${data.license}-blue.svg)<br />

  ## Description
  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contribution}
  
  ## License
  ${data.license} was used for this project.
  
  ## Tests
  ${data.test}
  
  ## Questions
 Find me on GitHub: [${data.git}](https://github.com/${data.git})<br /> 
 </br>
 For additional questions, email me at ${data.email}.  
`;
}

module.exports = generateMarkdown;
