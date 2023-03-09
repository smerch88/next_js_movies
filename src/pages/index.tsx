import Image from "next/image";
import cinemaImg from "../../public/cinema.jpg";
import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <h1>Movies search Home Page</h1>
    <Image
      src={cinemaImg}
      width={300}
      height={200}
      alt="cinema"
      placeholder="blur"
    />
  </>
);

export default Home;
