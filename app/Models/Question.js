


export class Question {

    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.correct = data.correct_answer
        this.wrong = data.incorrect_answers

    }

    get QuestionCard() {
        let template = ''
        this.wrong.forEach(w => {
            template += `<div class='col-md-6 bg-light text-center my-3'>
                <h4>${w}</h4>
            </div>`
        });
        return /*html*/ `
        <div class="col-md-12 bg-light rounded text-center my-3">
            <h1>${this.question}</h1>
        </div>
        <div class="col-md-6 bg-light text-center my-3"><h4>${this.correct}</h4></div>
        ${template}
        `
    }
}
