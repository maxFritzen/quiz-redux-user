import React from 'react';
import { connect } from 'react-redux';

const Question = (props) => (
  <div className="question">
    {props.question}
  </div>
);
export default Question;
// class Question extends React.Component {
//   render() {
//     return (
//       <div className="question" >
//         {this.props.question}
//       </div>
//     );
//   }
// }
//
//
//
// export default connect()(Question);
