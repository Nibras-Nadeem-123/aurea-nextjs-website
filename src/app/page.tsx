import Appointment from "@/components/home/appointment";
import Elemenator from "@/components/home/elemenator";
import Featured_products from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import ProductHover from "@/components/home/ProductHover";
import Question_answer from "@/components/home/question-answer";
import Top_picks from "@/components/home/top-picks";

 
export default function Home() {
  return (
    <div>
      <Hero/>
      <Elemenator/>
      <Appointment/>
      <Top_picks/>
      <ProductHover/>
      <Featured_products/>
      <Question_answer />
    </div>
  );
}
