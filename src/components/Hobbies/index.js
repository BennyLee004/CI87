import React from "react";

function Hobbies() {
  const [hobbies, setHobbies] = React.useState([
    {
      id: 3,
      hobby: "📷",
    },
    {
      id: 2,
      hobby: "🎹",
    },
  ]);

  const renderHobbiesLi = (item) => {
    return (
    <li key={item.id}>
    I
    <select>
      <option>likes</option>
      <option>loves</option>
    </select>
    {item.hobby}
    <button onClick={() => deleteHobby(item.id)}>X</button>
  </li>
  )}

  const deleteHobby = (hobbiID) => {{
    const updateHobbies = hobbies.filter(item => item.id !== hobbiID  )
    setHobbies(updateHobbies)
  }}
  return (
    <div className="hobbies">
      <h1>Rate your hobbies !</h1>
      {hobbies.map((item, i) => renderHobbiesLi(item))}
    </div>
  );
}

export default Hobbies;
