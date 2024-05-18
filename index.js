import inquirer from 'inquirer';
import chalk from 'chalk';
import { clear } from 'console';
let accountBalance = 0;
const displayMenu = () => {
    clear();
    console.log(chalk.bold.italic.yellowBright('Banking Manangement System'));
    console.log(chalk.bold.italic.yellowBright('----------------------'));
    console.log(chalk.bold.white('1.Desposite'));
    console.log(chalk.bold.white('2.Withdraw'));
    console.log(chalk.bold.white('3.Check Balance'));
    console.log(chalk.bold.white('4.Exit'));
};
const deposite = () => {
    inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter amount to deposite:',
    })
        .then((answers) => {
        accountBalance += answers.amount;
        console.log(chalk.bold.green(`Deposited ${answers.amount}. New balance: ${accountBalance}`));
    });
};
const Withdraw = () => {
    inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter amount to withdraw',
    })
        .then((answers) => {
        if (answers.amount > accountBalance) {
            console.log(chalk.bold.red('Insufficient balance'));
        }
        else {
            accountBalance -= answers.amount;
            console.log(chalk.bold.green(`Withdraw ${answers.amount}. New balance: ${accountBalance}`));
        }
    });
};
const checkBalance = () => {
    console.log(chalk.bold.green(`Current balance: ${accountBalance}`));
};
const exit = () => {
    console.log(chalk.bold.red('Exiting....'));
    process.exit();
};
const mainLoop = () => {
    displayMenu();
    inquirer.prompt({
        type: 'number',
        name: 'option',
        message: 'Choose an option',
    })
        .then((answers) => {
        switch (answers.option) {
            case 1:
                deposite();
                break;
            case 2:
                Withdraw();
                break;
            case 3:
                checkBalance();
                break;
            case 4:
                exit();
                break;
            default:
                console.log(chalk.bold.red('Invalid option'));
        }
        mainLoop();
    });
};
mainLoop();
