const Most = ({ post }) => {
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
  
  export default Most;


  export async function getStaticPaths() {
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=209171add0af96727d74a331959497ad&language=en-US&page=1'
 );
    const pop = await res.json();
    const paths = pop.results.map((post) => ({
      params: { most: post.id.toString() },
    }));
    return { paths, fallback: false };
  }
    
  export async function getStaticProps({ params }) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.most}?api_key=209171add0af96727d74a331959497ad&language=en-US`
    );
    const post = await res.json();
  
    return { props: { post } };
  }
  