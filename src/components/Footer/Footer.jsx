"use client";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer p-10 text-base-content">
      <nav>
        <header className="footer-title">Company</header>
        <Link href="#" className="link link-hover">
          About us
        </Link>
        <Link href="#" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="#" className="link link-hover">
          Terms of use
        </Link>
        <Link href="#" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="#" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button
              className="btn btn-primary join-item"
              onClick={(e) => e.preventDefault()}
            >
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
