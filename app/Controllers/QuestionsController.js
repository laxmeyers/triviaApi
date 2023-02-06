import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestion() {
    let template = ''
    appState.questions.forEach(q => template += q.QuestionCard)
    // console.log(appState.questions[1].QuestionCard);
    setHTML('question', appState.questions[1].QuestionCard)
}

export class QuestionsController {
    constructor(){
        console.log('hello trivia');
        appState.on('questions', _drawQuestion)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }
 }
