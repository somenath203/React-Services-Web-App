import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <div className="container">
        <div className="my-3 cover-container d-flex w-100 h-100 p-3 mx-auto justify-content-center flex-column">
          <main className="px-3">
            <h1 className="text_center">{props.name}</h1>
            <p className="text_center lead my-4">{props.description}</p>
            <div className="container my-4">
              <p className="lead">
                <center>
                  <NavLink to={props.visit} className="btn btn-outline-primary">
                    {props.btname}
                  </NavLink>
                </center>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Common;
