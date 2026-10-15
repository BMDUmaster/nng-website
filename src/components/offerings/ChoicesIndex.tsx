import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { choiceGroups } from "@/content/choices";
import depth from "@/components/art/VisualDepth.module.css";

/** Every consultation, found by the situation a person is in. Each line leads to the page that answers it. */
export function ChoicesIndex() {
  return (
    <section className="section-wrap section-space offer-choices" id="choose" aria-labelledby="choose-title">
      <div className="offer-choices-head">
        <h2 id="choose-title">Start from what you are facing</h2>
        <p>Choose a concern. You do not need to know which practice to ask for.</p>
      </div>
      <div className={depth.choices}>
        {choiceGroups.map((group) => (
          <details key={group.heading} className={depth.choice} name="consultation-concern">
            <summary>
              <Icon id={group.icon} />
              <span><span className={depth.choiceTitle}>{group.heading}</span><span className={depth.choiceExample}>{group.choices[0].say}</span></span>
              <span className={depth.chevron} aria-hidden="true">+</span>
            </summary>
            <ul>
              {group.choices.map((choice) => (
                <li key={choice.say}>
                  <Link prefetch={false} href={choice.href}>
                    {choice.say}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
