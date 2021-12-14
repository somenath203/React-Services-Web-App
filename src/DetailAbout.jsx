import { NavLink } from 'react-router-dom';

const DetailAbout = () => {
  return (
    <>
      <div className="container my-4">
        <h1 className="text_center">
          The name of our company is <center>MyService Pvt.Ltd</center> We are a
          team of around 100 members and our goal is to provide best service to
          the customer.
        </h1>
      </div>
      <div className="container my-5">
        <center>
          <NavLink to="/" className="btn btn-outline-primary">
            Click here to return back to the Home Page
          </NavLink>
        </center>
      </div>
    </>
  );
};

export default DetailAbout;
