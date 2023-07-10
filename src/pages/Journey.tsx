import Heading from "../components/Heading";
import KnowledgeWords from "../components/Knowledges";
import TechStack from "../components/TechStack";
import Timeline from "../components/Timeline";
import { events } from "../data/utils";

function Journey() {
  return (
    <div className="space-y-3">
      <Heading head="Career Triumphs" />
      <div className="container mx-auto py-8">
        <Timeline events={events} />
      </div>
      <TechStack />
      <KnowledgeWords />
    </div>
  );
}
export default Journey;
