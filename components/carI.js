import { Carousel } from "antd";


const Caro = (props)=>{
    return(
        <>
                <Carousel>

        {props.post.results.slice(0, 5).map((el, index) => (
            <div className="test" key={index}>
              <img src={"https://image.tmdb.org/t/p/w500" + el.poster_path} />
              <div className="mov">
                <div className="title">
                  <span className="movN">{el.original_title + ":"}</span>
                  <div className="genres">
                    {props.genre.genres.map((gen) =>
                      el.genre_ids.map((genID) =>
                        genID == gen.id ? (
                          <span className="genItem">{gen.name}</span>
                        ) : null
                      )
                    )}
                    <p className="date">{el.release_date}</p>
                  </div>
                </div>
                <div className="pic">
                  {
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + el.poster_path}
                    />
                  }
                </div>
              </div>
            </div>
          ))}
          </Carousel>
        </>
    )
}

export default Caro