import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head><title>Contact Us – BPS</title></Head>
      <header>
        <Link href="/"><img src="/logo.png" alt="BPS logo"/></Link>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link></nav>
      </header>
      <section>
        <h2>Get in Touch</h2>
        <form action="https://getform.io/f/your-form-endpoint" method="POST">
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="services" rows="4" placeholder="Tell us what you need" required/>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} BPS.</p>
      </footer>
    </div>
  );
}
