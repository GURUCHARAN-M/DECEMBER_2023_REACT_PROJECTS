import React from 'react';
import SubList from './SubList';

export default function MainList(){
  const myItems = ['Fruits', 'Vegetables', 'Desserts','Meats','Nuts','Cereals'];
  return (
    <div style={{marginLeft:'600px'}}>
      <h1>My Item List</h1>
      <SubList items={myItems} />
    </div>
  );
};
