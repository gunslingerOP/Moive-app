import Link from 'next/link'


const Cardztop = (props) => {
  return (
    <>
      <div className="rate">
        <h3>Top Rated</h3>
        <p className="dots">. . .</p>
      </div>


      <div className="deck">
        {props.popular.results.map((el, index) => (
          <div className="hold" key={index}>
      <Link href={`movie/${el.id}`}> 
            <img
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

export default Cardztop;
