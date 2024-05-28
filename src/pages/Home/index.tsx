import About from "../../components/About";
import HeroBanner from "../../components/HeroBanner";
import PopularPicks from "../../components/PopularPicks";

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <PopularPicks/>
      <About />
    </>
  );
};
