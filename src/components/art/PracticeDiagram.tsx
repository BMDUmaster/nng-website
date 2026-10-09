import { Explainer } from "./Explainer";

/** Illustrative inputs and decisions, not a personal reading or an outcome claim. */
export function PracticeDiagram({ hub }: { hub: string }) {
  if (hub === "numerology") return <figure className="practice-example">
    <figcaption>A calculation, then an interpretation</figcaption>
    <p>Fictional date: <strong>12 March 1990</strong></p>
    <div className="number-worked-example"><span>1 + 2 + 0 + 3 + 1 + 9 + 9 + 0 = <b>25</b></span><span>2 + 5 = <b>7</b></span></div>
    <p className="diagram-caption">The arithmetic gives a total. Its meaning depends on the numerology method being used, not proof of what will happen.</p>
  </figure>;
  if (hub === "vastu") return <figure className="practice-example">
    <figcaption>A space is more than its direction</figcaption>
    <Explainer kind="vastu" label="Illustrative floor plan: layout, daily use and north direction. Not a Vastu recommendation." />
    <p className="diagram-caption">Bring a plan with the entrance and north marked. Room use, light, ventilation and structural constraints matter alongside the traditional reading.</p>
  </figure>;
  if (hub === "astrology") return <figure className="practice-example">
    <figcaption>Your question guides the reading</figcaption>
    <Explainer kind="how-she-reads" label="Your question, relevant chart, your choices. A consultation sequence, not a prediction." />
    <p className="diagram-caption">Date, time and birthplace set the chart. Narayani considers the relevant themes alongside your circumstances; the choice remains yours.</p>
  </figure>;
  if (hub === "brain-training") return <figure className="practice-example">
    <figcaption>One everyday pattern to notice</figcaption>
    <ol className="response-example"><li><strong>Situation</strong><span>A colleague questions your idea.</span></li><li><strong>Usual response</strong><span>You hear criticism and rush to defend it.</span></li><li><strong>A different choice</strong><span>Pause and ask what needs clarifying.</span></li></ol>
    <p className="diagram-caption">A hypothetical reflection example, not a clinical model or promised result.</p>
  </figure>;
  return null;
}
