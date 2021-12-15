import CarouselComponent from "../components/Carousel/CarouselComponent";
import HomeServiceListComponent from "../components/List/HomeServiceListComponent";
import ListComponent from "../components/List/ListComponent";
import OfferComponent from "../components/Others/OfferComponent";
import TestimonialComponent from "../components/Others/TestimonialComponent";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <br />
      <ListComponent title="Food & Beverage" />
      <HomeServiceListComponent title="Home Service" />
      <OfferComponent />
      <ListComponent title="Top Offer" />
      <TestimonialComponent />
    </div>
  );
}
