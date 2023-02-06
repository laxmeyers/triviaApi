import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { trivia_api } from "./AxiosService.js"


class QuestionsService {
    nextQuestion() {
        if (appState.index < appState.questions.length) {
            
            appState.index++
        } else {
            throw new Error('You answered all the questions!')
        }
    }

    async getQuestions() {
        const res = await trivia_api.get('api.php?amount=10')
        // console.log(res.data.map(c => new Question(c)));

        appState.questions = res.data.results.map(q => new Question(q))
        // console.log(appState.questions[0]);
    }

}

export const questionsService = new QuestionsService()
