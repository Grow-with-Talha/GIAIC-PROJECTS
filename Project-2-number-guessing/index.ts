#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"

const validateAnswer = (randomNumber: number, answer: number): boolean => {
    if (answer === randomNumber) {
        return true
    } else {
        return false
    }

}
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const askQuestion = async () => {
    const rainbowTitle = chalkAnimation.rainbow(
        'simple calculator by @growwithtalha \n'
    );
    await sleep(1000)
    rainbowTitle?.stop()
    const randomNumber = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "guess a number between 1 to 9",
        choices: [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ]
    }])

    const validate = validateAnswer(randomNumber, answer.answer)

    if (validate === true) {
        console.log(`correct the answer is ${randomNumber}`)
    } else if (validate === false) {
        console.log(`Wrong answer. the corrent answer is ${randomNumber}`)
    }

    const nextAction = await inquirer.prompt([{
        name: "action",
        type: "list",
        message: "select an action",
        choices: ["Replay", "Quit"]
    }
    ])

    if (nextAction.action === "Replay") {
        askQuestion()
    } else {
        return null
    }
}

askQuestion()