import { Star } from "lucide-react";
import Stars from "../ui/stars";

const Intro = () => {
  return (
    <section className="container ">
      <div className="flex mb-2">
        <Stars />
      </div>
      <h1 className="text-5xl font-bold tracking-wider">
        Entdecke dein
        <br /> Dream-Team
      </h1>
    </section>
  );
};

export default Intro;
