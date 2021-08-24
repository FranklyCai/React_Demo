import React from 'react';

export default function Child2(props) {
  console.log('this is Child2');
  return (
    <div>
      <div style={{ border: '5px solid gray', fontSize: '15px' }}>Child2</div>
      {props.children}
    </div>
  );
}
