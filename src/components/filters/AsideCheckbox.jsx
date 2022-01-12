import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBy, removeFilter } from "../../slices/appSlices";

const AsideCheckbox = ({ filter, filterArrName }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (e, fil) => {
    if (isChecked === false) {
      console.log(isChecked);
      setIsChecked(!isChecked);
      dispatch(filterBy({ filter: fil, value: e.target.value }));
    } else {
      console.log(isChecked);
      dispatch(removeFilter({ filter: fil, value: e.target.value }));
      setIsChecked(!isChecked);
    }
  };
  return (
    <li className="shop_list-item">
      <input
        type="checkbox"
        value={filter}
        onChange={(e) => handleOnChange(e, filterArrName)}
        checked={isChecked}
      />
      <span> {filter}</span>
    </li>
  );
};

export default AsideCheckbox;
