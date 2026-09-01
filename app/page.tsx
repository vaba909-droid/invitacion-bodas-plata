const mapsMass = "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Jose+Ciudad+Guzman+Jalisco";
const mapsParty = "https://www.google.com/maps/search/?api=1&query=Ciudad+Guzman+Jalisco";
const calendar = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bodas+de+plata&dates=20261220T230000Z/20261221T050000Z&details=Celebracion+de+25+anos+de+amor&location=Ciudad+Guzman%2C+Jalisco";

export default function Home() {
  return <main>
    <section className="hero"><img src="/pareja.jpg" alt="La pareja celebrando juntos"/><div className="shade"/><div className="hero-copy"><p className="eyebrow">Bodas de plata · 2001—2026</p><div className="seal">25</div><h1>Nuestro amor cumple<br/><em>veinticinco años</em></h1><p>Hay historias que el tiempo no desgasta: las vuelve eternas.</p><a href="#invitacion" className="light-button">Descubre nuestra celebración ↓</a></div></section>
    <section id="invitacion" className="paper intro"><p className="eyebrow dark">Con la bendición de Dios</p><h2>Queremos celebrar<br/><em>este camino contigo</em></h2><p className="lead">Veinticinco años de complicidad, aprendizajes y una familia que es nuestro mayor regalo. Nos hará muy felices compartir contigo este día tan especial.</p><div className="date"><span>Domingo</span><strong>20</strong><span>Diciembre · 2026</span></div><audio controls preload="metadata" src="/nuestro-amor.wav">Tu navegador no admite audio.</audio><p className="audio-label">▶ Nuestra canción · “Nuestro amor cumple veinticinco”</p></section>
    <section className="story"><img src="/familia.jpg" alt="Retrato de la familia"/><div><p className="eyebrow">Nuestro mayor legado</p><blockquote>“El amor no sólo se mira: se construye, se cuida y se comparte.”</blockquote><p>Gracias por ser parte de nuestra historia.</p></div></section>
    <section className="paper schedule"><p className="eyebrow dark">Agenda del día</p><h2>Un día para <em>recordar</em></h2><div className="events">
      <article><div className="time">5:00 <small>p.m.</small></div><div><p className="number">01 · Ceremonia</p><h3>Misa de acción de gracias</h3><p>Parroquia de San José de la Montaña<br/>Calle del Rosario 125, Barrio La Esperanza<br/>Ciudad Guzmán, Jalisco</p><a href={mapsMass} target="_blank">Ver ubicación ↗</a></div></article>
      <article><div className="time">7:00 <small>p.m.</small></div><div><p className="number">02 · Recepción</p><h3>Celebración y cena</h3><p>Salón Jardín Los Encinos<br/>Camino Real del Valle 420, Col. Las Peñas<br/>Ciudad Guzmán, Jalisco</p><a href={mapsParty} target="_blank">Ver ubicación ↗</a></div></article>
    </div><a className="dark-button" href={calendar} target="_blank">Agregar al calendario</a><p className="sample-note">Invitación de muestra · Las ubicaciones son demostrativas.</p></section>
    <section className="closing"><img src="/caballos.jpg" alt="La pareja con sus caballos"/><div><p className="eyebrow">Código de vestimenta</p><h2>Formal · estilo campirano</h2><p>Tu presencia es nuestro mejor regalo.</p><div className="monogram">XXV</div></div></section>
    <footer><span>20 · 12 · 2026</span><p>Veinticinco años. Una vida. La misma elección.</p><span>Ciudad Guzmán, Jalisco</span></footer>
  </main>;
}
