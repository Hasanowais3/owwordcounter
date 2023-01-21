#! /usr/bin/env node

import inquirer from "inquirer";

const answers :{
    Sentence: string
} = await inquirer.prompt([
        {
            type:"input",
            name:"Sentence",
            message:"Enter your sentence to count the word: "
        }
    ]);
    const words = answers.Sentence.trim().split(" ")
    console.log(`your sentence word count is ${words.length}`)