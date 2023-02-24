//function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license})`;
  }
  return "";
}

const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `*[License](#license)\n`;
  }
  return "";
};

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
 ${data.description}

### Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.licence)}

*[Contributing](#contributuing)

*[Test](#tests)

*[QUestions](#questions)


##Installation

To install necessary dependencies, run the following command:

\'\'\'
${data.installation}
\'\'\'


## Usage
${data.usage}

## License

This project was licensed under the ${data.license} license

##Contributing
${data.contributing}

## Tests

To run tests, run the following comand:

\'\'\'
${data.test}
\'\'\'

### Questions 

 If you have any questions about the repo open an issue or contact me directly at ${
   data.email
 }
 
 You can find more of my work at [${data.github}](https://github.com/${
    data.github
  })


`;
}

module.exports = generateMarkdown;
