import Link from 'next/link'


const Cardzup = (props) => {
    return (
      <>
     <div className="rate">
          <h3>Upcoming</h3>
          <p className="dots">. . .</p>
        </div>
        <div className="deck">
          {props.upcom.results.map((el, index) => (
            <div className="hold" key={index}>
              <Link href={`mo/${el.id}`}>
              <img
                key={index}
                src={"https://image.tmdb.org/t/p/w500" + el.poster_path}
              />
              </Link>
              <div className="under">{el.original_title}</div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Cardzup;