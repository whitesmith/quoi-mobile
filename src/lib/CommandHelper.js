class CommandHelper {

  constructor() {
    this.questionGoTime = null;
    this.questionAnswerTime = null;
  }

  setQuestionGoTime(questionGoTime) {
    this.questionGoTime = questionGoTime;
  }

  handleButtonClick(socket, questionGo, option, questionId, onQuestionAnswer) {
    if (questionGo) {
      // Calculate response time
      this.questionAnswerTime = new Date();
      const questionTime = Math.abs(this.questionAnswerTime.getTime() - this.questionGoTime.getTime());
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
