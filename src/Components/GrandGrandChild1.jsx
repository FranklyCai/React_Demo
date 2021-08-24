import React from 'react';

export default function GrandGrandChild1(props) {
  console.log('this is GrandGrandChild1');
  return (
    <div>
      <div style={{ border: '2px solid purple', fontSize: '12px' }}>GrandGrandChild1</div>
      {props.children}
    </div>
  );
}
