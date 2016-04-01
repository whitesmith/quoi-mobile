class CommandHelper {

  constructor() {
    this.questionGoTime = null;
    this.questionAnswerTime = null;
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
