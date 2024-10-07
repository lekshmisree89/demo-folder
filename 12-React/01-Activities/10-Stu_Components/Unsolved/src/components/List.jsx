function List({ groceries } ) {
  return (
    <ul className="list-group">

      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
<h1>GROCERY</h1>

      {groceries.map((grocery) => {
        {/* //iterate over each grocery
//return a  element that contains the item's name and
 has a unique key attribute */}
        return (
          <li key={grocery.id}>
            {grocery.name}
            {grocery.purchased ? " - Purchased" : " - Not Purchased"}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
