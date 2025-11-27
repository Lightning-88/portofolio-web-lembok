import lembokPicture from "../assets/lembok.png";
import { Button } from "../components/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 pt-4 px-4 md:flex-row">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">Hello Blud</h1>
        <div className="space-y-1">
          <h2 className="font-bold text-3xl">
            I am <span className="text-green-600">Diaz Jagad</span>
          </h2>
          <p className="text-sm text-stone-400">Chess Player</p>
        </div>
        <p className="text-sm text-justify text-stone-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          molestiae aspernatur sit corrupti odit molestias perspiciatis natus
          tenetur, repudiandae consequuntur facilis illum perferendis
          consectetur rem pariatur quaerat alias, quis aliquid. Vel, velit!
          Obcaecati officia, praesentium exercitationem laboriosam magni quae
          natus, placeat omnis expedita possimus nostrum labore! Facilis,
          perferendis sint iusto ut debitis accusamus incidunt temporibus sed
          tempora obcaecati aperiam corporis.
        </p>
        <div>
          <Button>View Games</Button>
        </div>
      </div>

      <div>
        <img src={lembokPicture} alt="hero-picture" />
      </div>
    </div>
  );
}
