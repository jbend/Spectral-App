import './Loader.css';

export default function Loader({ show }) {

  const LoadCard = () => {
    return (
      <div className="">
        <div className="loader"></div>
      </div>
    );
  }

  return ( 
    show ? <LoadCard /> : null
  );
}
