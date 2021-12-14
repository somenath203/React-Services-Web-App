import Card from './Card';
import Sdata from './Sdata';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Services = () => {
  return (
    <>
      <div className="container my-4">
        <h1 className="text_center">Our Services</h1>
      </div>
      <center>
        {Sdata.map((val, index) => {
          return (
            <Card key={index} title={val.title} description={val.description} />
          );
        })}
      </center>
    </>
  );
};

export default Services;
