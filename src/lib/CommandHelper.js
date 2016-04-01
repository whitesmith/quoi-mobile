class CommandHelper {

  static componentDidMount(socket, onQuestionReady, onQuestionGo) {
    socket.on('question_ready', () => {
      onQuestionReady();
      socket.on('question_go', () => {
        onQuestionGo();
      });
    });
  }

  static buttonClicked(questionGo) {
    if (questionGo) {
      console.log('button clicked');
    }
  }
}

export default CommandHelper;
