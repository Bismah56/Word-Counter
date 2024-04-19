#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.hex("#b57170")("\t \n \t\t\t\tWELCOME TO MY WORD COUNTER!\n"));
let condition = true;
while (condition) {
    let askSentence = await inquirer.prompt({
        type: "input",
        name: "useranswer",
        message: chalk.bold.hex("#b57170")("Enter a sentence:")
    });
    let words = askSentence.useranswer.trim().split(" ");
    console.log(chalk.magenta("\n- Sentence Words:"));
    console.log(words);
    console.log(chalk.bold.yellow("\n- Word Count:"), chalk.bold.green(words.length), "\n");
    let confirm = await inquirer.prompt({
        type: "confirm",
        name: "useranswer",
        message: chalk.bold.hex("#b57170")("Do you want us to count more words?"),
    });
    condition = confirm.useranswer;
}
;
