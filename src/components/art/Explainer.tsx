import styles from "./VisualDepth.module.css";

export type DiagramKind = "method" | "chart" | "vastu" | "numbers" | "birth-details" | "rectification" | "lagna" | "houses" | "grahas" | "signs" | "divisional" | "yogas" | "how-she-reads";

const flows: Partial<Record<DiagramKind, string[]>> = {
  method: ["Notice", "Understand", "Practise"],
  "birth-details": ["Date", "Time", "Place"],
  rectification: ["Dated events", "Possible time", "Test the fit"],
  divisional: ["D1: overall", "D9: partnership", "D10: work"],
  "how-she-reads": ["Your question", "Relevant chart", "Your choices"],
};

/** Conceptual teaching drawings, never personal readings or outcome charts. */
export function Explainer({ kind, label }: { kind: DiagramKind; label: string }) {
  const flow = flows[kind];
  return <figure className={styles.drawing}>
    <svg viewBox="0 0 420 260" role="img" aria-label={label}>
      {flow ? <>
        <path className={styles.trail} d="M89 110H186M234 110H331" />
        {flow.map((word, i) => <g key={word}>
          <circle cx={65 + i * 145} cy={110} r={24} />
          <text x={65 + i * 145} y={116} className={styles.number}>{i + 1}</text>
          <text x={65 + i * 145} y={165}>{word}</text>
        </g>)}
        <path d="m130 104 7 6-7 6m145-12 7 6-7 6" />
      </> : kind === "vastu" ? <>
        <path d="M100 60H320V215H100ZM100 135H205V60M205 135V215M265 60V135H320" />
        <path d="M100 170h24m0 0a24 24 0 0 1-24 24M205 160h24m0 0a24 24 0 0 1-24 24" />
        <path d="M350 85V35m-7 12 7-12 7 12" />
        <text x={350} y={25}>N</text><text x={150} y={105}>Layout</text><text x={260} y={180}>Daily use</text>
      </> : kind === "numbers" ? <>
        <path d="M160 40V220M220 40V220M100 100H280M100 160H280" />
        {[4,9,2,3,5,7,8,1,6].map((n,i) => <text key={n} className={styles.number} x={130+(i%3)*60} y={80+Math.floor(i/3)*60}>{n}</text>)}
        <path d="M310 90h50m-8-6 8 6-8 6M310 160h50" /><text x={335} y={195}>Reflect</text>
      </> : kind === "grahas" || kind === "signs" || kind === "yogas" ? <>
        {[0,1,2].map(i => <g key={i}><circle cx={110+i*100} cy={100} r={24}/><text x={110+i*100} y={106}>{kind === "grahas" ? ["Sun","Moon","Grahas"][i] : kind === "signs" ? ["Planet","Sign","House"][i] : ["Planet","Relation","Context"][i]}</text></g>)}
        <path className={styles.trail} d="M134 100H186M234 100H286M210 124V165" />
        <text x={210} y={195}>Read together, not alone</text>
      </> : <>
        <path d="M110 30H310V230H110ZM110 30 310 230M310 30 110 230M210 30 310 130 210 230 110 130Z" />
        {kind === "houses" ? <>
          {[[210,90],[160,60],[130,90],[170,137],[130,185],[160,215],[210,185],[260,215],[290,185],[250,137],[290,90],[260,60]].map(([x,y],i)=><text key={i} x={x} y={y}>{i+1}</text>)}
          <path d="M160 130H45M260 130H375M210 195V233" className={styles.accent} />
          <text x={45} y={119}>Home</text><text x={375} y={119}>Work</text><text x={210} y={252}>Relationships</text>
        </> : <><text x={210} y={87}>Lagna</text><text x={210} y={185}>Houses</text><circle cx={210} cy={77} r={28} className={styles.accent}/></>}
      </>}
    </svg>
  </figure>;
}

export function MethodJourney() {
  return <div className={styles.method}>
    <ol className={styles.methodLabels}>
      <li><b aria-hidden="true">1</b><strong>Notice</strong><span>What keeps repeating?</span></li>
      <li><b aria-hidden="true">2</b><strong>Understand</strong><span>What influences your response?</span></li>
      <li><b aria-hidden="true">3</b><strong>Practise</strong><span>Try a different response in daily life.</span></li>
    </ol>
  </div>;
}
