import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function AppFooter() {
  const { t } = useTranslation('footer')
  return (
    <footer className="mt-10 bg-white">
      <div className="container mx-auto">
        <div className="copyright flex flex-col items-center justify-between py-5 md:flex-row-reverse">
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
            {t('footer_copyright', { date: new Date().getFullYear() })} {t('footer_design_by')}{' '}
            <a
              href="https://www.facebook.com/huutrung.mmt"
              target="_blank"
              rel="noreferrer"
              className="text-blueColor">
              Xìn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
