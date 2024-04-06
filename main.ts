#! /user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.italic.bgMagenta(
    "\n\tWelcome to Muhammad-Ubaid - Text Manipulation Tool\n"
  )
);

let answer = await inquirer.prompt([
  {
    type: "string",
    name: "text",
    message: "Enter the text to manipulate: ",
  },
  {
    type: "list",
    name: "option",
    message: "Select the manipulation option: ",
    choices: ["Uppercase", "Lowercase", "Titlecase"],
  },
]);

if (answer.option === "Uppercase") {
  console.log(chalk.bgBlueBright.bold(answer.text.toUpperCase()));
} else if (answer.option === "Lowercase") {
  console.log(chalk.bgBlueBright.bold(answer.text.toLowerCase()));
} else if (answer.option === "Titlecase") {
  console.log(
    chalk.bgBlueBright.bold(
      answer.text.charAt(0).toUpperCase() + answer.text.slice(1).toLowerCase()
    )
  );
} else {
  console.log(chalk.red.bold("\t\nInvalid option\n"));
}