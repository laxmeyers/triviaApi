import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestion() {
    setHTML('question', appState.questions[appState.index].QuestionCard)
}

function _drawAnswer() {
    setHTML('answer', appState.questions[appState.index].answerCard)
}
function _drawDefault() {
    setHTML('answer', '')
}

export class QuestionsController {
    constructor(){
        // console.log('hello trivia');
        this.getQuestions()
        appState.on('questions', _drawQuestion)
        appState.on('index', _drawQuestion)
        appState.on('index', _drawDefault)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
        } catch (error) {
            Pop.error(error)
        }
    }

    nextQuestion() {
        try {
            questionsService.nextQuestion()
        } catch (error) {
            Pop.error(error)
        }
    }

    showAnswer() {
        try {
            _drawAnswer()
        } catch (error) {
            Pop.error(error)
        }
    }
 }
