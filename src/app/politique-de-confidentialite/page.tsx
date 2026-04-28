import BackLink from "@/components/BackLink";

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <div className="mb-8">
        <BackLink />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-white">Politique de confidentialité</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est la société <strong className="text-white">ESQ. AGENCY</strong> (Agencilab), SAS au capital de 1 200,00€, dont le siège social est situé au 45 Quai Docteur Gailleton, 69002 Lyon.
          </p>
          <p className="mt-2">SIRET : 921 853 297 00023</p>
          <p>Contact : contact@agencilab.com</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">2. Données collectées</h2>
          <p>Dans le cadre de l&apos;utilisation du site agencilab.com, nous sommes susceptibles de collecter les données suivantes :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Données de navigation (cookies, adresse IP, pages consultées)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">3. Finalités du traitement</h2>
          <p>Les données personnelles collectées sont utilisées pour :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Permettre la prise de rendez-vous avec un conseiller</li>
            <li>Répondre aux demandes de contact</li>
            <li>Envoyer des communications relatives à nos services (avec votre consentement)</li>
            <li>Améliorer l&apos;expérience utilisateur et analyser le trafic du site</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">4. Base légale du traitement</h2>
          <p>Le traitement de vos données repose sur :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Votre consentement (prise de rendez-vous, inscription newsletter)</li>
            <li>L&apos;exécution d&apos;un contrat ou de mesures précontractuelles</li>
            <li>L&apos;intérêt légitime de ESQ. AGENCY (amélioration des services, analyse du trafic)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">5. Destinataires des données</h2>
          <p>Vos données personnelles peuvent être transmises aux prestataires suivants :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>iClosed (gestion des rendez-vous)</li>
            <li>Vercel Inc. (hébergement du site)</li>
            <li>Google Analytics (analyse du trafic)</li>
          </ul>
          <p className="mt-2">Vos données ne sont jamais vendues à des tiers.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">6. Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée maximale de 3 ans à compter du dernier contact avec la personne concernée, sauf obligation légale de conservation plus longue.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à : <strong className="text-white">contact@agencilab.com</strong>
          </p>
          <p className="mt-2">
            Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : <span className="text-white">www.cnil.fr</span>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">8. Cookies</h2>
          <p>
            Le site agencilab.com utilise des cookies pour améliorer l&apos;expérience utilisateur et mesurer l&apos;audience. Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser l&apos;utilisation des cookies.
          </p>
          <p className="mt-2">Les cookies utilisés sont :</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li><strong className="text-white">Cookies essentiels</strong> : nécessaires au fonctionnement du site</li>
            <li><strong className="text-white">Cookies analytiques</strong> : permettent de mesurer l&apos;audience (Google Analytics)</li>
            <li><strong className="text-white">Cookies tiers</strong> : iClosed (widget de prise de rendez-vous)</li>
          </ul>
          <p className="mt-2">
            Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">9. Sécurité</h2>
          <p>
            ESQ. AGENCY met en oeuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
          <p className="mt-2">Le site utilise le protocole HTTPS pour sécuriser les échanges de données.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white">10. Modification de la politique</h2>
          <p>
            ESQ. AGENCY se réserve le droit de modifier la présente politique de confidentialité à tout moment. La version en vigueur est celle accessible sur le site agencilab.com.
          </p>
          <p className="mt-2">Dernière mise à jour : avril 2026</p>
        </section>
      </div>

      <div className="mt-16">
        <BackLink className="text-sm text-accent-400 hover:underline" />
      </div>
    </div>
  );
}
