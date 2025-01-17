
import VideoStream from "../components/VideoStream";
import Telemetry from "../components/Telemetry";
import Controller from "../components/Controller";
import Control from "@/components/Control";
import InputTerminal from "../components/InputTerminal";

export default function HomePage() {
  return (
    <section className="container flex flex-row justify-evenly gap-3 pb-8 pt-6 md:py-10">
    
      <Controller/>
      <VideoStream/>
      <Telemetry/>
      <Control/>
      <InputTerminal/>
    </section>
  );
}
