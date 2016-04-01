class CommandHelper {

  constructor() {
    this.questionGoTime = null;
    this.questionAnswerTime = null;
  }

  waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo, waitingForCorrection, onQuestionCorrection) {
    if (waitingForCorrection) {
      socket.on('question_correction', (data) => {
        onQuestionCorrection();
      });
    }
    else if (!questionGo) {
      socket.on('question_ready', (data) => {
        onQuestionReady(data);
        socket.on('question_go', () => {
          this.questionGoTime = new Date().getTime();
          onQuestionGo();
        });
      });
    }
  }

  handleButtonClick(socket, questionGo, option, questionId, onQuestionAnswer) {
    if (questionGo) {
      // Calculate response time
      this.questionAnswerTime = new Date().getTime();
      const questionTime = this.questionAnswerTime - this.questionGoTime;
      this.questionGoTime = null;
      this.questionAnswerTime = null;

      // emit 'question_answer'
      socket.emit('question_answer', {
        id: questionId,
        answer: [option],
        time: questionTime
      });

      onQuestionAnswer();
    }
  }
}

export default CommandHelper;
