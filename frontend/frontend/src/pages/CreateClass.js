import { useState } from "react";
import axios from "axios";

function CreateClass() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    students: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/classes/create",
      {
        ...formData,
        students: formData.students.split(","),
      }
    );

    alert("Class Created");

    window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Create Class</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="datetime-local"
          name="startTime"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="datetime-local"
          name="endTime"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="students"
          placeholder="student1@gmail.com,student2@gmail.com"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Create
        </button>

      </form>

    </div>
  );
}

export default CreateClass;