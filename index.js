#!/usr/bin/env node
import inquirer from 'inquirer';
let cond = true;
console.log('***|Welcome To Words Conunter|***\n');
while (cond) {
    let userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'sentence',
            message: 'Write Your Sentence To Count The Words:'
        },
    ]);
    if (userInput.sentence == '') {
        console.log('You did not Write any thing');
    }
    else {
        let userWords = userInput.sentence.trim().split(" ");
        console.log("Your Total Words Count:", userWords.length);
        cond = true;
    }
    let userAgain = await inquirer.prompt([{
            type: 'confirm',
            name: 'again',
            message: '\nDo You Want To Use Word Counter Again?',
            default: false
        }]);
    if (!userAgain.again) {
        cond = false;
        console.log('...BYE...');
    }
    else {
        cond = true;
    }
}
