import { PageHeader } from "../components/page-header";
import { photos } from "../components/photos-grid"

export default function Photos() {
  return (
    <>
      <PageHeader>Photos</PageHeader>
      <ul className="photos">
        {photos.map(photo => (
          <li>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
          />
        </li>
        ))}
      </ul>
    </>
  );
}
