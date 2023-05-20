import Blog from "../../../Components/Blog";
import Carousel from "../../../Components/Carousel";
import Creatives from "../../../Components/Creatives";
import Inspiration from "../../../Components/Inspiration";

const MainPresenter = () => {
  return (
    <div>
      <Blog />
      <Carousel />
      <Inspiration />
      <Creatives />
    </div>
  );
};

export default MainPresenter;
