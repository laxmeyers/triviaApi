import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion() {
    setHTML('')
}

export class QuestionsController {
    constructor(){
        console.log('hello trivia');
        appState.on('questions', _drawQuestion)
    }

    async getQuestions(){}
 }
