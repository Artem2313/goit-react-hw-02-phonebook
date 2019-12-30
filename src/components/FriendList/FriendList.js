/* eslint-disable react/prop-types */
import React from 'react';

const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default FriendList;
