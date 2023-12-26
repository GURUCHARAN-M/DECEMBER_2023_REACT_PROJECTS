import React from 'react';

export default function SubList({ items }){
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

