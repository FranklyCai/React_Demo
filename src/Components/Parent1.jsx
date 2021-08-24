import React from 'react';

export default function Parent1(props) {
  console.log('this is Parent1');
  return (
    <div>
      <div style={{ border: '10px solid red', fontSize: '20px' }}>Parent1</div>
      {props.children}
    </div>
  );
}
