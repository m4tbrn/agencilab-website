export default function MentionsLegales() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-accent-400 hover:underline">← Retour au site</a>
      <h1 className="mb-10 text-3xl font-bold text-white">Mentions légales</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">1. Éditeur du site</h2>
          <p>
            Le site agencilab.com est édité par la société <strong className="text-white">ESQ. AGENCY</strong> (nom commercial : Agencilab), SAS au capital de 1 200,00€.
          </p>
          <ul className="mt-3 space-y-1">
            <li>Siège social : 45 Quai Docteur Gailleton, 69002 Lyon</li>
            <li>SIREN : 921 853 297</li>
            <li>SIRET : 921 853 297 00023</li>
            <li>RCS Lyon : 921 853 297</li>
            <li>Numéro de TVA intracommunautaire : FR81921853297</li>
            <li>Directeur de la publication : Louis Esquier</li>
            <li>Contact : contact@agencilab.com</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">2. Hébergement</h2>
          <p>
            Le site est hébergé par <strong className="text-white">Vercel Inc.</strong>, 440 N Baxter St, Los Angeles, CA 90012, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur le site agencilab.com (textes, images, vidéos, logos, graphismes, icônes) sont la propriété exclusive de ESQ. AGENCY ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable de ESQ. AGENCY.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">4. Limitation de responsabilité</h2>
          <p>
            ESQ. AGENCY ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site agencilab.com.
          </p>
          <p className="mt-2">
            ESQ. AGENCY décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite des informations et contenus présents sur le site.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">5. Liens hypertextes</h2>
          <p>
            Le site agencilab.com peut contenir des liens hypertextes vers d&apos;autres sites. ESQ. AGENCY n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">6. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux de Lyon seront seuls compétents.
          </p>
        </section>
      </div>

      <div className="mt-16">
        <a href="/" className="text-sm text-accent-400 hover:underline">← Retour au site</a>
      </div>
    </div>
  );
}
