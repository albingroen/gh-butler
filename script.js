const fs = require("fs");
const request = require("request");
const exec = require("child_process").exec;
const log = require("emoji-logger");
const inquirer = require("inquirer");

const githubToken = require("./config");
const baseUrl = "https://api.github.com";

function setup() {
  log(" Setting up gh-butler...");

  const questions = [
    {
      type: "input",
      name: "accessToken",
      message: "Your Github (repo-level) access token: "
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const token = answers["accessToken"];
    if (token.length === 40) {
      fs.writeFileSync(
        `${__dirname}/config.js`,
        `module.exports = ${JSON.stringify(token)}`
      );
      log(" Correct Github access token", "success");
      main(token);
    } else {
      log(" Incorrect Github access token", "warn");
      setup();
    }
  });
}

function main(githubToken) {
  if (!githubToken) {
    setup();
  } else {
    // AUTH
    log(" Authenticating...");

    const authOptions = {
      method: "GET",
      url: baseUrl,
      headers: {
        "User-Agent": "gh-butler",
        Accept: "application/vnd.github.baptiste-preview+json",
        Authorization: `token ${githubToken}`
      }
    };

    request(authOptions, async error => {
      if (error) console.log({ error });

      // CREATE REPO
      log(" Create project");
      const questions = [
        {
          type: "input",
          name: "name",
          message: "Project name: "
        },
        {
          type: "input",
          name: "description",
          message: "Project description: "
        },
        {
          type: "confirm",
          name: "public",
          message: "Should this be public?",
          default: false
        },
        {
          type: "list",
          name: "template",
          message: "Use a template:",
          choices: ["None", "React.js", "Node.js", "Node.js + Express"]
        }
      ];

      inquirer.prompt(questions).then(answers => {
        const useTemplate = answers["template"] !== "None";
        const templates = {
          "React.js": "enhanced-cra",
          "Node.js": "Node-template",
          "Node.js + Express": "Express-template"
        };

        const postOptions = {
          method: "POST",
          url: useTemplate
            ? `${baseUrl}/repos/albingroen/${
                templates[answers["template"]]
              }/generate`
            : `${baseUrl}/user/repos`,
          headers: {
            "User-Agent": "gh-butler",
            Accept: "application/vnd.github.baptiste-preview+json",
            Authorization: `token ${githubToken}`
          },
          body: {
            name: answers["name"],
            description: answers["description"],
            private: !answers["public"],
            gitignore_template: !useTemplate ? "Node" : undefined,
            owner: useTemplate ? "albingroen" : undefined
          },
          json: true
        };

        log(` Creating ${answers["name"]}...`);

        request(postOptions, (error, response, body) => {
          if (error) console.log({ error });

          log(` Downloading...`);
          exec(
            `cd ~/Documents && git clone ${body.ssh_url} && cd ${body.name} && code .`,
            error => {
              if (error) console.log({ error });
              log(" Opening VSCode...");
              console.log("");
              log(" Done", "success");
            }
          );
        });
      });
    });
  }
}

main(githubToken);
