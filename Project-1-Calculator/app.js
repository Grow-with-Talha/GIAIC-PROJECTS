#!/usr/bin/env node
import inquirer from "inquirer"
import chalkAnimation from 'chalk-animation';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


const calculate = async () => {
    const rainbowTitle = chalkAnimation.rainbow(
        'simple calculator by @growwithtalha \n'
      );
      await sleep(500)
      rainbowTitle.stop()
    const value_1 = await inquirer.prompt({
        type: "number",
        name: "value_1",
        message: "Enter the first value to calculate:",
    })

    const operation = await inquirer.prompt({
        type: "input",
        name: "operation",
        message: "Enter the operation to perform `+`, `-`, `*`, `/`, `%`:",
    })
    const value_2 = await inquirer.prompt({
        type: "number",
        name: "value_2",
        message: "Enter the second value to calculate:",
    })
    let answer;
    switch (operation.operation) {
        case "+":
            answer =  value_1.value_1 + value_2.value_2;
            break;
        case "-":
            answer = value_1.value_1 - value_2.value_2;
            break;
        case "*":
            answer =  value_1.value_1 * value_2.value_2;
            break;
        case "/":
            answer =  value_1.value_1 / value_2.value_2;
            break;
        case "%":
            answer = value_1.value_1 + value_2.value_2;
            break;
        default:
            console.log("Invalid operation")
            break;
    }

    console.log(answer)
}

calculate()