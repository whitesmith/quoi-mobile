class CommandHelper {

  constructor() {
    this.questionGoTime = null;
    this.questionAnswerTime = null;
  }

  waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo) {
    if (!questionGo) {
      socket.on('question_ready', (data) => {
        onQuestionReady(data);
        socket.on('question_go', () => {
          this.questionGoTime = new Date().getTime();
          onQuestionGo();
        });
      });
    }
  }

  handleButtonClick(questionGo, option, onQuestionAnswer) {
    if (questionGo) {
      // Calculate response time
      this.questionAnswerTime = new Date().getTime();
      const questionTime = this.questionAnswerTime - this.questionGoTime;
      this.questionGoTime = null;
      this.questionAnswerTime = null;

      //TODO: emit 'question_answer'
      console.log(option);
      console.log(questionTime / 1000);
      onQuestionAnswer();
    }
  }
}

export default CommandHelper;
