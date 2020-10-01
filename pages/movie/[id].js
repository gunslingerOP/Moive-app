const Movie = ({ post }) => {
  return (
    <>
      <div className="poster">
        <img src={"https://image.tmdb.org/t/p/w500" + post.poster_path} />
      <div className='tite'>
        {post.original_title}
      </div>
      </div>
      <div className='desc'>
       <p> Description</p>
          
        {post.overview}
      </div>
    </>
  );
};

export default Movie;
export async function getStaticPaths() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=209171add0af96727d74a331959497ad&language=en-US&page=1"
  );
  const topR = await res.json();
  const paths = topR.results.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}





export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=209171add0af96727d74a331959497ad&language=en-US`
  );
  const post = await res.json();

  return { props: { post } };
}
