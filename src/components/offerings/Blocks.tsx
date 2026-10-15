import { Icon } from "@/components/icons/Icon";
import { Rich } from "@/components/ui/Rich";
import type { Block } from "@/content/offerings/types";

/** Renders one unit of body copy from the content model (src/content/offerings/types.ts). */
export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="offer-p">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <div className="offer-block">
          {block.title && <h3 className="offer-h3">{block.title}</h3>}
          <ul className="offer-list">
            {block.items.map((item) => (
              <li key={item}>
                <Rich text={item} />
              </li>
            ))}
          </ul>
        </div>
      );
    case "terms":
      return (
        <div className="offer-block">
          {block.title && <h3 className="offer-h3">{block.title}</h3>}
          <dl className="offer-terms">
            {block.items.map((item) => (
              <div key={item.term} className="offer-term">
                <dt>
                  <Icon id={item.icon} />
                  <span>
                    <Rich text={item.term} />
                  </span>
                </dt>
                <dd>
                  <Rich text={item.text} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
    case "table":
      return (
        <div className="offer-block">
          <div className="offer-table-wrap" role="region" aria-label={block.caption ?? block.head.join(", ")} tabIndex={0}>
            <table className="offer-table">
              {block.caption && <caption>{block.caption}</caption>}
              <thead>
                <tr>
                  {block.head.map((cell) => (
                    <th key={cell} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th key={index} scope="row">
                          {block.icons ? (
                            <span className="offer-cell">
                              <Icon id={block.icons[rowIndex]} />
                              <span>
                                <Rich text={cell} />
                              </span>
                            </span>
                          ) : (
                            <Rich text={cell} />
                          )}
                        </th>
                      ) : (
                        <td key={index}>
                          <Rich text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "steps": {
      // Step titles sit one level below whatever heading precedes them, so the outline never skips a level.
      const StepTitle = block.title ? "h4" : "h3";
      return (
        <div className="offer-block">
          {block.title && <h3 className="offer-h3">{block.title}</h3>}
          <ol className="offer-steps">
            {block.items.map((item, index) => (
              <li key={item.title}>
                <span className="step-mark" aria-hidden="true">
                  <Icon id={item.icon} />
                  <b>{index + 1}</b>
                </span>
                <div>
                  <StepTitle>{item.title}</StepTitle>
                  <p>
                    <Rich text={item.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    }
    case "quote":
      return (
        <figure className="offer-quote">
          <blockquote>
            <p>“{block.text}”</p>
          </blockquote>
          <figcaption>{block.source}</figcaption>
        </figure>
      );
    case "note":
      return (
        <div className="offer-note">
          <p>
            <Rich text={block.text} />
          </p>
        </div>
      );
  }
}

export function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </>
  );
}
