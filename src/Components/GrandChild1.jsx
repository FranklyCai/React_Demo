import React from 'react';

// export default function GrandChild1(props) {
//   console.log('this is GrandChild1');
//   return (
//     <div>
//       <div style={{ border: '3px solid red', fontSize: '13px' }}>GrandChild1</div>
//       {props.children}
//     </div>
//   );
// }

export default class GrandChild1 extends React.Component {
  render() {
    console.log('this is GrandChild1');
    return (
      <div>
        <div style={{ border: '3px solid red', fontSize: '13px' }}>GrandChild1</div>
        {this.props.children}
      </div>
    );
  }
}