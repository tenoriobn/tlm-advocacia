export default function Map() {
  return (
    <section aria-labelledby="contact-map-title" className="mt-12 lg:mt-18">
      <h2 id="contact-map-title" className="sr-only">
        Localização da PSM Advocacia
      </h2>

      <figure>
        <iframe
          title="Mapa indicando a localização da PSM Advocacia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.91805113799!2d-46.658529924006835!3d-23.561469628799642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c94ae1f7c5%3A0xe96bbcfef4fab736!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e1!3m2!1spt-BR!2sbr!4v1776023480665!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-90 lg:h-123 rounded-sm"
        />
        <figcaption className="sr-only">
          Mapa indicando a localização da PSM Advocacia
        </figcaption>
      </figure>
    </section>
  );
}
