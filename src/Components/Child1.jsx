import React from 'react';

export default function Child1(props) {
  console.log('this is Child1');
  return (
    <div>
      <div style={{ border: '5px solid gray', fontSize: '15px' }}>Child1</div>
      {props.children}
    </div>
  );
}
