import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  // TODO 2: Maintain menu state
  const [menuItems, setMenuItems] = useState(initialMenuItems); // initialize state to maintain the current menu items
  const [newMenuItem, setNewMenuItem] = useState(""); // state to hold the value of the new menu item input
  const [filter, setFilter] = useState("");   // state to hold the filter input value

  //    TODO 2: Implement a new menu item (AddMenuItem callback)
  const addMenuItem = useCallback(() => { // callback to add a new menu item to the list
    if (newMenuItem.trim() !== "") { // checks if the input is not empty
      setMenuItems((prevItems) => [...prevItems, newMenuItem]);   // update the menu items state by adding the new item
      setNewMenuItem(""); // clear input after adding 
    }
  }, [newMenuItem]);

  // TODO 4: Filter menu items, case-insensitive
  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Input to add new menu items */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Enter a menu item"
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* Input to filter menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      {/* TODO 1: Render filtered list of menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
