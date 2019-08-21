import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ListItemsPage() {
  const items = useSelector(state => state.items);
  let key = 1;
  return (
    <div>
      <Link to="/">add an item</Link>
      <ul>
        {items.map(item => <li key={key++}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ListItemsPage;
