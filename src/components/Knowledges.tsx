import { knowledgeList } from "../data/utils";

function KnowledgeWords() {
  return (
    <section className="space-y-3">
      <h2 className="text-3xl font-bold">Digital Prowess</h2>
      <div className="flex flex-wrap items-center justify-center space-x-1 space-y-1">
        {knowledgeList.map((knowledge) => (
          <div
            key={knowledge.id}
            className="bg-bg3 text-txt p-2 rounded shadow-md text-center "
          >
            <h3 className="text-xs text-slate-400">{knowledge.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KnowledgeWords;
