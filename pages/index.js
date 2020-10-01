import { useEffect, useState } from "react";
import { Layout, Input, Button, Carousel } from "antd";
const { Search } = Input;
const { Header, Content, Footer } = Layout;


import Cardztop from "../components/cardz-top";
import Cardzpop from "../components/cardz-pop";
import Cardzup from "../components/cardz-upcom";
import Head from "../components/head";
import Caro from "../components/carI";
const Home = ({ post, genre, popular, upcom }) => {
  
  return (
    <div className="big">
      <section className="first">
        <Head />
      </section>

      <section className="cover">
        <Caro post={post} genre={genre} />
      </section>

      <section className="cards">
        <Cardztop popular={popular} />
        <Cardzpop post={post} />
        <Cardzup upcom={upcom} />
      </section>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=209171add0af96727d74a331959497ad&language=en-US&page=1"
  );
  const post = await res.json();

  const gen = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=209171add0af96727d74a331959497ad&language=en-US"
  );
  const genre = await gen.json();

  const pop = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=209171add0af96727d74a331959497ad&language=en-US&page=1"
  );
  const popular = await pop.json();

  const up = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=209171add0af96727d74a331959497ad&language=en-US&page=1"
  );
  const upcom = await up.json();

  // Pass post data to the page via props
  return { props: { post, genre, popular, upcom } };
}
