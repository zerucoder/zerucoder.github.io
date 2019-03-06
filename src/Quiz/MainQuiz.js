import React, { Component } from "react";
import Questions from "./Questions";
import AnswerList from "./AnswerList";
import Progress from "./Progress";
import Score from "./Score";
import { Paper } from "@material-ui/core";
import "./Quiz.css";

class MainQuiz extends Component {
  state = {
    questionData: [
      {
        prompt: "What does HTML stand for?",
        answers: [
          "HyperText Markup Language",
          "Home Tool markup Language",
          "Hyperlinks and Test Markup Language"
        ],
        correct: 0
      },
      {
        prompt: "Choose the correct HTML element for the largest heading:",
        answers: ["<heading>", "<h6>", "<head>", "<h1>"],
        correct: 3
      },
      {
        prompt: "Choose the correct HTML element for the largest heading:",
        answers: ["<heading>", "<h6>", "<head>", "<h1>"],
        correct: 3
      }
    ],
    progress: 0,
    score: 0
  };

  checkAnswer = index => {
    const correct = this.state.questionData[this.state.progress].correct;
    let newScore = 0;
    let newProgress = 0;
    if (correct === index) {
      newScore = this.state.score + 1;
      this.setState({ score: newScore });
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    } else {
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    }
  };

  resetQuiz = () => {
    this.setState({ progress: 0, score: 0 });
  };

  render() {
    const questionData = this.state.questionData[this.state.progress];
    const totalQuestions = this.state.questionData.length;

    if (this.state.questionData.length > this.state.progress) {
      return (
        <div>
          <Paper className="paper">
            <Questions questionData={questionData.prompt} />
            <AnswerList
              answers={questionData.answers}
              answerCallback={this.checkAnswer}
            />

            <Score score={this.state.score} />
            <Progress progress={this.state.progress} />
          </Paper>
        </div>
      );
    } else {
      return (
        <div>
          <Paper className="paper">
            <p>Quiz Finished</p>
            <span>
              Your score is{" "}
              <Score score={this.state.score} totalQuestions={totalQuestions} />
            </span>
            <button type="button" onClick={this.resetQuiz}>
              Reset Quiz
            </button>
          </Paper>
        </div>
      );
    }
  }
}

export default MainQuiz;
