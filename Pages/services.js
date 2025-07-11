import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <Head><title>Our Services – BPS</title></Head>
      <header>
        <Link href="/"><img src="/logo.png" alt="BPS logo"/></Link>
        <nav><Link href="/">Home</Link><Link href="/contact">Contact</Link></nav>
      </header>
      <section>
        <h2>Services Overview</h2>
        <div className="services">
          {[
            { title: 'Selling & Buying', desc: 'Expert property transactions tailored to your goals.' },
            { title: 'Letting & Management', desc: 'Full-service lettings and tenant management.' },
            { title: 'Development & Refurbishment', desc: 'High‑quality in‑house trades for renovations.' },
            { title: 'Market Analysis', desc: 'Real‑time data for buyers & investors.' },
            { title: 'Mortgage Analysis', desc: 'Historical & projected UK mortgage rates guidance.' },
          ].map((s,i) => (
            <div className="card" key={i}>
              <h3>{s.title}</h3><p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} BPS.</p>
      </footer>
    </div>
  );
}
