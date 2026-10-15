import type { HubSlug } from '@/content/offerings/types';
import { asset } from '@/lib/assets';

const descriptions: Record<HubSlug, string> = {
  astrology: 'An illustrative North Indian birth chart with traditional celestial symbols',
  numerology: 'A traditional Lo Shu numerology grid, not a personal reading',
  vastu: 'A floor plan showing room divisions, doors, furniture and north',
  'brain-training': 'Several recurring paths pause at one point before a different response',
  'stones-and-rudraksh': 'A faceted gemstone beside a textured Rudraksha bead',
};

export function ServiceIllustration({ hub, thumbnail = false }: { hub: HubSlug; thumbnail?: boolean }) {
  return <picture className={`service-symbol${thumbnail ? ' is-thumbnail' : ''}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={asset(`/images/services-line/${hub}.svg`)} width={240} height={200} alt={descriptions[hub]} loading="lazy" decoding="async" className="service-real-img" />
  </picture>;
}

export function ServiceBanner({ hub }: { hub: HubSlug }) {
  return (
    <figure className="service-banner">
      <ServiceIllustration hub={hub} />
      <figcaption>Conceptual imagery</figcaption>
    </figure>
  );
}
