import React from "react";

const Home = () => {
  return (
    <div className="card w-50 mx-auto mt-5 p-3">
      <h2 className="text-center text-primary">Admin dashboard</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
    
        </div>
        <div className="mb-3">
          <input
            type="Name Author"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Name Author"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleCheck1"
            placeholder="Number"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Send
        </button>
    </div>
  );
};

export default Home;
