class CommandHelper {

  static componentDidMount(socket, onQuestionReady, onQuestionGo) {
    socket.on('question_ready', () => {
      onQuestionReady();
      socket.on('question_go', () => {
        onQuestionGo();
      });
    });
  }

}

export default CommandHelper;
