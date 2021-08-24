import React from 'react';

export default function Parent2(props) {
  console.log('this is Parent2');
  return (
    <div>
      <div style={{ border: '10px solid green', fontSize: '20px' }}>Parent2</div>
      {props.children}
    </div>
  );
}
