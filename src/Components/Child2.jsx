import React from 'react';

// export default function Child2(props) {
//   console.log('this is Child2');
//   return (
//     <div>
//       <div style={{ border: '5px solid gray', fontSize: '15px' }}>Child2</div>
//       {props.children}
//     </div>
//   );
// }

export default class Child2 extends React.Component {
  render() {
    console.log('this is Child2');
    return (
      <div>
        <div style={{ border: '5px solid gray', fontSize: '15px' }}>Child2</div>
        {this.props.children}
      </div>
    );
  }
}
