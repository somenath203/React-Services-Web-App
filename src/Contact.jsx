import { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    // here, 'name' contains all the names i.e. name, phone and email resp and 'value' contains all the values of the associated names.

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Crongragulations ${data.fullname}, your form has been submitted successfully. Our team will reach you as soon as possible. Thanks for choosing us.
    `);

    

  };
  return (
    <>
      <div className="container my-4">
        <h1 className="text_center">Contact Us</h1>
      </div>

      <div className="container my-5">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
              placeholder="enter your full name"
              required
            />
          </div>
          <div className="mb-3 my-4">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={InputEvent}
              placeholder="enter your email address"
              required
            />
          </div>
          <div className="mb-3 my-4">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phone"
              value={data.phone}
              onChange={InputEvent}
              placeholder="enter your phone number"
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
