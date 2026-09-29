import { asset, assetSet } from "@/lib/assets";
import { bookTitle } from "@/content/about";

/** The cover of her book with the rotating astrological zodiac chakra wheel matching reference image. */
export function BookCover({
  className = "book-cover",
  sizes = "(max-width: 680px) 75vw, 420px",
  withChakra = false,
}: {
  className?: string;
  sizes?: string;
  withChakra?: boolean;
}) {
  return (
    <div className={`book-cover-stage ${className}`}>
      {withChakra && (
        <div className="book-zodiac-wheel" aria-hidden="true">
          <img
            src={asset("/images/zodiac-chakra.png")}
            className="zodiac-chakra"
            alt=""
            width={580}
            height={580}
            loading="lazy"
          />
        </div>
      )}
      <div className="book-cover-inner">
        <img
          src={asset("/images/book-cover-660.webp")}
          srcSet={assetSet("/images/book-cover-440.webp 440w, /images/book-cover-660.webp 660w")}
          sizes={sizes}
          width={660}
          height={934}
          alt={`The cover of ${bookTitle}, by Narayani Garg`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
