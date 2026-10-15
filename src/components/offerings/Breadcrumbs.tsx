import Link from "next/link";
import { Fragment } from "react";

export type Crumb = { label: string; href?: string };

/** Where this page sits: Home, Services, the service, then the page. The last item is the current page. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {trail.map((crumb, index) => (
        <Fragment key={crumb.label}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {crumb.href ? (
            <Link prefetch={false} href={crumb.href}>
              {crumb.label}
            </Link>
          ) : (
            <span aria-current="page">{crumb.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
