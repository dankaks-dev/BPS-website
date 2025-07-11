import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BPS – Brickfields Property Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/"><img src="/logo.png" alt="BPS logo" /></Link>
        <nav>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className="hero">
        <h1>Building Luxury with Integrity & Insight</h1>
      </div>

      <section>
        <h2>Our Services</h2>
        <div className="services">
          {['Selling & Buying','Letting & Management','Development & Refurbishment','Market & Mortgage Analysis']
            .map((title) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>Experienced in delivering top-tier {title.toLowerCase()} solutions tailored to your needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        {[
          { name: 'Alice J.', text: 'BPS turned my property into a dream home – efficient, clean, and stunning!' },
          { name: 'The Patel Family', text: 'Their market insights helped us secure the perfect investment.' },
          { name: 'Mark R.', text: 'Refurbishment was painless and exceeded expectations.' },
        ].map((t, i) => (
          <div className="card" key={i}>
            <p>“{t.text}”</p>
            <p><strong>{t.name}</strong></p>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Brickfields Property Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
