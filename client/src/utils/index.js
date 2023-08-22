import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //add extra functionality to make sure we do not get the same prompt twice. 
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}