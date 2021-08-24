import React from 'react';

// export default function GrandChild2(props) {
//   console.log('this is GrandChild2');
//   return (
//     <div>
//       <div style={{ border: '3px solid purple', fontSize: '13px' }}>GrandChild2</div>
//       {props.children}
//     </div>
//   );
// }

export default class GrandChild2 extends React.Component {
  render() {
    console.log('this is GrandChild2');
    return (
      <div>
        <div style={{ border: '3px solid purple', fontSize: '13px' }}>GrandChild2</div>
        {this.props.children}
      </div>
    );
  }
}
