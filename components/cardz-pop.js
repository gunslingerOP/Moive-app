import Link from "next/link";

const Cardzpop = (props) => {
  return (
    <>
      <div className="rate">
        <h3>Most Popular</h3>
        <p className="dots">. . .</p>
      </div>

      <div className="deck">
        {props.post.results.map((el, index) => (
          <div className="hold" key={index}>
      <Link href={`mov/${el.id}`}> 
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

export default Cardzpop;
