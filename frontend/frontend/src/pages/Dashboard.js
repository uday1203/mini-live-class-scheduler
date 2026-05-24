import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [classes, setClasses] = useState([]);

  const fetchClasses = async () => {

    const res = await axios.get(
      "http://localhost:5000/classes"
    );

    setClasses(res.data.classes);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const deleteClass = async (id) => {

    await axios.delete(
      `http://localhost:5000/classes/${id}`
    );

    fetchClasses();
  };

  <button
  onClick={() => {
    window.location.href = "/";
  }}
>
  Logout
</button>

  return (
    <div style={{ padding: "30px" }}>

      <h1>Scheduled Classes</h1>

      <a href="/create">
        <button>Create Class</button>
      </a>

      <br />
      <br />

      {classes.map((item) => (

        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <p>
            Meet:
            <a
              href={item.meetLink}
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </p>

          <button
            onClick={() => deleteClass(item._id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Dashboard;