import React from 'react'
import Link from 'next/link';
import styles from '../TheFooter/TheFooter.module.scss';

export const Impressum = () => {
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>Impressum</h2>
      <p className={styles.modalTextCenter}>Angaben gemäß § 5 DDG</p>
      <p className={styles.modalTextCenter}>Glamstuff Group</p>
      <p className={styles.modalTextCenter}>Inh. Sascha Dith</p>
      <p className={styles.modalTextCenter}>Neuenhofstr. 2</p>
      <p className={styles.modalTextCenter}>47055 Duisburg</p>
      <p className={styles.modalTextCenter}>Germany</p>
      <h3 className={styles.modalSubtitle}>Kontakt</h3>
      <p className={styles.modalText}>E-Mail: <Link href="mailto:office@sashadith.com">office@sashadith.com</Link></p>
      <h3 className={styles.modalSubtitle}>Umsatzsteuer</h3>
      <p className={styles.modalText}>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE228723604</p>
      <h3 className={styles.modalSubtitle}>STREITSCHLICHTUNG</h3>
      <p className={styles.modalText}>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <Link href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</Link></p>
      <p className={styles.modalText}>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      <p className={styles.modalText}>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <h3 className={styles.modalSubtitle}>Haftung für Inhalte</h3>
      <p className={styles.modalText}>Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p className={styles.modalText}>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      <h3 className={styles.modalSubtitle}>Haftung für Links</h3>
      <p className={styles.modalText}>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
      <p className={styles.modalText}>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      <h3 className={styles.modalSubtitle}>Urheberrecht</h3>
      <p className={styles.modalText}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      <p className={styles.modalText}>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </div>
  )
}
