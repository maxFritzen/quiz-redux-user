import React from 'react';
import { connect } from 'react-redux';
import database from '../firebase/firebase';
import { selectQuiz } from '../actions'

class ListOfQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    }
  }

  componentDidMount() {
    // hämta alla quiz
    const list = [];
    database.ref('quiz/titles/').on('child_added', (data) => {
      console.log(data.val().title);
      list.push(data.val().title);

      this.setState({
        titles: list
      });
    });

    // console.log(list);

  }
  render() {
    return (
      <div>
        LIST OF QUIZ
        <ul>
          {this.state.titles.map((title, index) => {
            return <li key={index} onClick={() => this.props.select(title)}>{index} : {title}</li>
          })}
        </ul>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  select: (title) => dispatch(selectQuiz(title))
});

export default connect(null, mapDispatchToProps)(ListOfQuiz);
