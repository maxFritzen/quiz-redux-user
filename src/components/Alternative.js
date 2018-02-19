import React from 'react';
import { connect } from 'react-redux';

import { storeAnswer } from '../actions';

// const Alternative = (props) => (
//   <div className="alternative">
//     <button
//
//       onClick={() => props.handleClick(props.alternative)}
//       >
//       {props.alternative}
//     </button>
//   </div>
// );
//
// export default Alternative;

class Alternative extends React.Component {
  // Tar in alternativet ifrån QuestionTable
  constructor(props){
    super(props);
  }
  render() {
    const alternative = this.props.alternative;

    return (
      <div className="alternative">
        <button
          onClick={() => this.props.storeAnswer(alternative)}
          >
          {alternative}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeAnswer: (answer) => dispatch(storeAnswer(answer))
});

export default connect(undefined, mapDispatchToProps)(Alternative);
