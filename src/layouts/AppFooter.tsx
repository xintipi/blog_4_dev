import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/modules/AppFooter.module.scss'

export default function AppFooter() {
  return (
    <footer className="mt-10 bg-white pt-8">
      <div className="container mx-auto">
        <div className="grid gap-x-0 md:grid-cols-3 md:gap-x-6">
          <div className="col-span-1">
            <div className="footer-section my-38px">
              <h3 className={clsx(styles['footer-section-title'])}>Last Responses</h3>
              <ul className="footer-section-content">
                <li className={clsx(styles['footer-section-content-response'])}>
                  <Image
                    src="/img/webp/profile-picture2_2x.webp"
                    className={clsx(styles['footer-section-content-img'], 'h-auto w-full')}
                    alt="Profile Picture"
                    width="0"
                    height="0"
                    sizes="100vw"
                    priority
                  />
                  <div className={clsx(styles['footer-section-content-response-wrapper'])}>
                    <h4>
                      <span className="text-secondary">Jobby Foster</span> in{' '}
                      <Link
                        href="#"
                        className="response-subject light-link underline"
                        title="Subject Response">
                        Want to learn Javascript in 2022?
                      </Link>
                    </h4>
                    <p className="font-primary mt-2.5">
                      Love this guy and his dog, really nice work!
                    </p>
                  </div>
                </li>

                <li className={clsx(styles['footer-section-content-response'])}>
                  <Image
                    src="/img/webp/profile-picture3_2x.webp"
                    className={clsx(styles['footer-section-content-img'])}
                    alt="Profile Picture"
                    width={56}
                    height={56}
                  />
                  <div className={clsx(styles['footer-section-content-response-wrapper'])}>
                    <h4>
                      <span className="text-secondary">Sheryl Winarick</span> in{' '}
                      <Link
                        href="#"
                        className="response-subject light-link underline"
                        title="Subject Response">
                        Want to learn Javascript in 2022?
                      </Link>
                    </h4>
                    <p className="font-primary mt-2.5">
                      Love the way you did the background image man.
                    </p>
                  </div>
                </li>

                <li className={clsx(styles['footer-section-content-response'])}>
                  <Image
                    src="/img/webp/profile-picture4_2x.webp"
                    className={clsx(styles['footer-section-content-img'])}
                    alt="Profile Picture"
                    width={56}
                    height={56}
                  />
                  <div className={clsx(styles['footer-section-content-response-wrapper'])}>
                    <h4>
                      <span className="text-secondary">Jobby Foster</span> in{' '}
                      <Link
                        href="#"
                        className="response-subject light-link underline"
                        title="Subject Response">
                        Want to learn Javascript in 2022?
                      </Link>
                    </h4>
                    <p className="font-primary mt-2.5">
                      Really nice style. I need to take note for drawing people!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="footer-section my-38px">
              <h3 className={clsx(styles['footer-section-title'])}>Last Tweet</h3>
              <ul className="footer-section-content">
                <li className={clsx(styles['footer-section-content-twitt'])}>
                  <FontAwesomeIcon icon={faTwitter} width={27} />
                  <h4>
                    <Link href="#" className="text-secondary hover:underline" title="microsoft">
                      @microsoft{' '}
                    </Link>
                  </h4>
                  <time dateTime="2022-12-31T23:59:59Z">3 days ago</time>
                  <p className="font-primary mt-2.5 mb-4">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    She's climbing #50Peaks in 50 states in 50 days. Meet{' '}
                    <Link href="#" className="light-link" title="">
                      https://msft.it/Melissa
                    </Link>
                  </p>
                </li>

                <li className={clsx(styles['footer-section-content-twitt'])}>
                  <FontAwesomeIcon icon={faTwitter} width={27} />
                  <h4>
                    <Link href="#" className="text-secondary hover:underline" title="microsoft">
                      @microsoft{' '}
                    </Link>
                  </h4>
                  <time dateTime="2022-12-31T23:59:59Z">3 days ago</time>
                  <p className="font-primary mt-2.5 mb-4">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    She's climbing #50Peaks in 50 states in 50 days. Meet{' '}
                    <Link href="#" className="light-link" title="">
                      https://msft.it/Melissa
                    </Link>
                  </p>
                </li>

                <li className={clsx(styles['footer-section-content-twitt'])}>
                  <FontAwesomeIcon icon={faTwitter} width={27} />
                  <h4>
                    <Link href="#" className="text-secondary hover:underline" title="microsoft">
                      @microsoft{' '}
                    </Link>
                  </h4>
                  <time dateTime="2022-12-31T23:59:59Z">3 days ago</time>
                  <p className="font-primary mt-2.5 mb-4">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    She's climbing #50Peaks in 50 states in 50 days. Meet{' '}
                    <Link href="#" className="light-link" title="">
                      https://msft.it/Melissa
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="footer-section my-38px border-b border-solid border-secondBorderColor">
              <Image
                src="/img/webp/logo-grey_2x.webp"
                className="mb-5.5"
                alt="Logo"
                width={32}
                height={32}
              />
              <div className="footer-section-content">
                <p className="font-primary mb-9 mt-9">
                  D -Blog is a responsive, beautiful,{' '}
                  <span className="text-secondary">creative & unique</span> wordpress theme best
                  suited for blogs & personal portfolio showcases. It’s easy to use &amp; setup,{' '}
                  <span className="text-secondary">SEO friendly</span> and has top notch standard
                  compliant code.
                </p>
              </div>
            </div>

            <div className="footer-section my-38px">
              <h3 className={clsx(styles['footer-section-title'], 'mb-34px')}>Newsletter</h3>
              <div className="footer-section-content">
                <p className="font-primary mt-2.5 mb-4">
                  Stay up to do date with my posts, subscribe to newsletter:
                </p>
                <form action="#" method="post">
                  <input type="email" className="form-control" placeholder="Type Email" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright flex flex-col items-center justify-between border-t border-solid border-borderColor py-5 md:flex-row-reverse">
          <ul className="flex">
            <li>
              <Link
                href="https://tinyurl.com/yc2ekzfd"
                className="social-icon"
                title="Facebook"
                target="_blank">
                <FontAwesomeIcon icon={faFacebook} width={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://tinyurl.com/yx9dy849"
                className="social-icon"
                title="Github"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} width={18} />
              </Link>
            </li>
            <li>
              <Link
                href="https://tinyurl.com/3xneh8zm"
                className="social-icon"
                title="LinkedIn"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} width={18} />
              </Link>
            </li>
          </ul>
          <p className="font-primary mt-2 text-center md:mt-0 md:text-left">
            Copyright &#169; {new Date().getFullYear()}. Nguyen Huu Trung
          </p>
        </div>
      </div>
    </footer>
  )
}
