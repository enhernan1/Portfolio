import "./Toggle.css";
import { getImageUrl } from "../../utils";

export const Toggle = ({ handleChange, isChecked}) => {
  return (
    <div className="toggle-container">
      <img className="toggle-button" src={isChecked ? getImageUrl("/toggle/night_mode.png") : getImageUrl("/toggle/light_mode.png")} alt="toggle" onClick={() => handleChange(!isChecked)}/>
    </div>
  )
};