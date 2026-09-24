import { useState } from "react";

export default function PetImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`${className} image-fallback`} role="img" aria-label={alt}>
        <div className="fallback-pet">🐶</div>
        <strong>Imagem da clínica</strong>
        <small>Substitua pela foto do cliente</small>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
