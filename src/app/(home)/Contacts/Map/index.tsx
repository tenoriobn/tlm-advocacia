export default function Map() {
  return (
    <section aria-labelledby="contact-map-title" className="mt-12 lg:mt-18">
      <h2 id="contact-map-title" className="sr-only">
        Localização da Kondoru
      </h2>

      <figure>
        <iframe
          title="Mapa com a localização da Kondoru"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.960559395808!2d-46.58507420000001!3d-23.5601836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eb62e95265b%3A0xad5fd2086883aaf0!2sTLM%20Advocacia!5e1!3m2!1spt-BR!2sbr!4v1775664233262!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-90 lg:h-123 rounded-sm"
        />
      </figure>
    </section>
  );
}
