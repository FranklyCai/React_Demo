import React from 'react';

export default function Parent3(props) {
  console.log('this is Parent3');
  return (
    <div>
      <div style={{ border: '10px solid green', fontSize: '20px' }}>Parent3</div>
      {props.children}
    </div>
  );
}
