import React from "react";
import { useNavigate } from "react-router-dom";

import AppButton from "../../AppButton";
import AppInputField from "../../AppInputField";
import AppDragAndDropFile from "../../AppDragAndDropFile";

import "./style.scss";

const MovieCreateScreen = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const handleSubmit = () => navigate("/");

  const [state, setState] = React.useState({
    title: "",
    publishYear: 0,
    poster: "",
  });

  const handleChange = (name, value) => setState({ ...state, [name]: value });
  return (
    <div className="movies-create">
      <h2 className="heading">Create a new movie</h2>
      <div className="create-form">
        <div className="img-uploader">
          <AppDragAndDropFile onChange={handleChange} name="poster" />
        </div>
        <div className="fields">
          <AppInputField
            placeholder="Title"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <AppInputField
            placeholder="Publishing year"
            type="number"
            name="publishYear"
            value={state.publishYear}
            onChange={handleChange}
          />
          <div className="action-btns">
            <AppButton text="Cancel" outline={true} onClick={goBack} />
            <AppButton text="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCreateScreen;
