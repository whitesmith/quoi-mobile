class CommandHelper {

  static waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo) {
    if (!questionGo) {
      socket.on('question_ready', () => {
        onQuestionReady();
        socket.on('question_go', () => {
          onQuestionGo();
        });
      });
    }
  }

  static handleButtonClick(questionGo, option, onQuestionAnswer) {
    if (questionGo) {
      //TODO: emit 'question_answer'
      onQuestionAnswer();
    }
  }
}

export default CommandHelper;
