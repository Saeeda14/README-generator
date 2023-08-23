// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    // Add more license badges here as needed
};

if (license) {
    const lowerCaseLicenseName = license.toLowerCase();
    if (licenseBadges.hasOwnProperty(lowerCaseLicenseName)) {
        return licenseBadges[lowerCaseLicenseName];
    } else {
        return "";
    }
} else {
    return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: "https://opensource.org/licenses/MIT",
    apache: "https://opensource.org/licenses/Apache-2.0"
    // Add more license links here as needed
};

if (license) {
    const lowerCaseLicenseName = license.toLowerCase();
    if (licenseLinks.hasOwnProperty(lowerCaseLicenseName)) {
        return licenseLinks[lowerCaseLicenseName];
    } else {
        return "";
    }
} else {
    return "";
}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadges = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    // Add more license badges here as needed
};

const licenseLinks = {
    mit: "https://opensource.org/licenses/MIT",
    apache: "https://opensource.org/licenses/Apache-2.0"
    // Add more license links here as needed
};

if (license && licenseBadges.hasOwnProperty(license.toLowerCase())) {
    const badge = licenseBadges[license.toLowerCase()];
    const link = licenseLinks[license.toLowerCase()];

    return `## License\n\n${badge}\n\nThis project is licensed under the [${license}](${link}) License.`;
} else {
    return "";
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
# Description 
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)
# Installation 
The following steps are required to install this project ${data.Installation}
# Usage 
These are the instrcutions and examples for use ${data.Usage}
# License 
This project is licensed under ${data.License}
# Contribute 
These are the guidelines on how you can contribute to this project ${data.Contribute}
# The following examples show how to run this application ${data.Tests}
# If you have any questions, please reach out at ${data.Questions}
`;
}

module.exports = generateMarkdown;
