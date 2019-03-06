import React, { Component } from "react";
import data from "./data";
import Answers from "./Answers";
import Popup from "./Popup";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Main extends Component {
  state = {
    nr: 0,
    total: data.length,
    showButton: false,
    questionAnswered: false,
    score: 0,
    displayPopup: "flex"
  };

  pushData = nr => {
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3]
      ],
      correct: data[nr].correct,
      nr: this.state.nr + 1
    });
  };

  componentWillMount = () => {
    let { nr } = this.state;
    this.pushData(nr);
  };

  nextQuestion = () => {
    let { nr, total, score } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex"
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false
      });
    }
  };

  handleShowButton = () => {
    this.setState({
      showButton: true,
      questionAnswered: true
    });
  };

  handleStartQuiz = () => {
    this.setState({
      displayPopup: "none",
      nr: 1
    });
  };

  handleIncreaseScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score
    } = this.state;

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <Popup
          style={{ display: displayPopup }}
          score={score}
          total={total}
          startQuiz={this.handleStartQuiz}
        />

        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              <h4>
                Question {nr}/{total}
              </h4>
              <p>{question}</p>
            </div>
            <Answers
              answers={answers}
              correct={correct}
              showButton={this.handleShowButton}
              isAnswered={questionAnswered}
              increaseScore={this.handleIncreaseScore}
            />
            <div id="submit">
              {showButton ? (
                <button className="fancy-btn" onClick={this.nextQuestion}>
                  {nr === total ? "Finish quiz" : "Next question"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Main);
