import React from 'react';

export default function InfoLists({ info, type, setType }) {
  return (
    <div>
      <select
        value={type}
        onInput={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="TV">TV</option>
        <option value="Movie">Movie</option>
        <option value="Special">Special</option>
        <option value="OVA">OVA</option>
        <option value="ONA">ONA</option>
      </select>

      {info.map((item) => (
        <div className="items" key={item.id}>
          <p> Title: {item.title}</p>
          <p> Type: {item.type}</p>
          <img className="pics" src={item.image_url} />
        </div>
      ))}
    </div>
  );
}
