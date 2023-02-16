import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/modules/Header.module.scss'
import clsx from 'clsx'

export default function Header() {
  return (
    <header className="bg-white shadow-header">
      <div className="container mx-auto">
        <div
          className={clsx(
            styles['header-top'],
            'border-b-border flex items-center justify-between border-borderColor pt-5 pb-3.5 lg:border-b'
          )}>
          <div className="header-top-logo">
            <a href="#" title="Logo">
              <Image src="/img/webp/logo_2x.webp" alt="Dblog Logo" width={32} height={32} />
            </a>
          </div>
          <div className="header-top-text hidden lg:block">
            <p className="font-primary">
              <span className="italic">“Modern Javascript”</span>
              <span>book is available!</span>
              <Link
                href="/shop"
                className="header-top-text-link relative text-secondary hover:text-primary hover:underline"
                title="Modern Javascript Book">
                Check out
                <i className="pe-7s-angle-right absolute text-2xl"></i>
              </Link>
            </p>
          </div>
          <div className="relative flex items-center">
            <div className="header-top-search mr-2.5 lg:mr-0">
              <div className="header-top-search-btn h-7 w-7">
                <i className="pe-7s-search cursor-pointer text-3xl text-primary"></i>
              </div>
              <form
                id="search-form"
                className="absolute top-[calc(50%-24px)] right-0 mr-10 hidden w-200px lg:mr-0"
                action="#"
                method="get">
                <input type="text" className="form-control" placeholder="Search..."></input>
                <button
                  className="absolute top-[calc(50%-23px)] right-3px text-3xl text-primary"
                  type="submit">
                  <i className="pe-7s-search"></i>
                </button>
              </form>
            </div>
            <Link href="#" className="light-link" title="Menu">
              <div
                id="menu-animate-icon"
                className="relative ml-2.5 block h-4.5 w-6 rotate-0 cursor-pointer transition-transform lg:hidden">
                <span className="top-0 origin-left"></span>
                <span className="top-2 origin-left"></span>
                <span className="top-4 origin-left"></span>
              </div>
            </Link>
          </div>
        </div>
        <nav className="header-nav hidden py-5 lg:block">
          <ul className="block lg:flex">
            <li className="ml-0 mr-5">
              <Link href="/" className="active-link" title="Start page">
                Start page
              </Link>
            </li>
            <li className="group relative mx-5">
              <Link
                href="#"
                className="dropdown-toggle light-link pb-10 after:absolute after:top-[calc(50%-18px)] after:-ml-0.5 after:font-icons after:text-24px after:transition-all after:content-['\e688'] lg:group-hover:after:rotate-180"
                title="Blog articles">
                Blog articles
              </Link>
              <ul className="dropdown-menu hidden lg:group-hover:block">
                <li className="after:bg-blueColor">
                  <Link href="/blog-list" title="Blog CSS articles">
                    CSS
                  </Link>
                </li>
                <li className="after:bg-redColor">
                  <Link href="/blog-list" title="Blog HTML articles">
                    HTML
                  </Link>
                </li>
                <li className="after:bg-yellowColor">
                  <Link href="/blog-list" title="Blog Javascript articles">
                    Javascript
                  </Link>
                </li>
                <li className="after:bg-greenColor">
                  <Link href="/blog-list" title="Blog raphic articles">
                    Graphic
                  </Link>
                </li>
                <li>
                  <Link href="/blog-list" title="Blog Post">
                    Blog Post
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mx-5">
              <Link href="/about-me" className="light-link" title="About me">
                About me
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/portfolio" className="light-link" title="My projects">
                My projects
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/contact" className="light-link" title="Contact me">
                Contact me
              </Link>
            </li>
            <li className="buyproducts-link ml-auto flex">
              <Link
                className="group flex items-center text-secondary "
                href="/shop"
                title="Buy products">
                <i className="pe-7s-cart mr-2.5 text-2xl"></i>
                <span className="group-hover:underline">Buy products</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
