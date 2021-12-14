import { NavLink } from 'react-router-dom';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Card = (props) => {
  return (
    <>
      <div className="container my-5">
        <div class="card">
          <div className="card-body">
            <h4 className="card-title"><b>{props.title}</b></h4>
            <p className="card-text">{props.description}</p>
            <NavLink to="/contact" className="btn btn-outline-success">
              Check Out
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
