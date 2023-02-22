import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'
import { GrFacebook, GrGithub, GrLinkedin, GrSkype } from 'react-icons/gr'

export default function AppFooter() {
  const { t } = useTranslation('footer')
  return (
    <footer className="mt-10 bg-white">
      <div className="container mx-auto">
        <div className="copyright flex flex-col items-center justify-between py-5 md:flex-row-reverse">
          <ul className="flex">
            <li role="presentation">
              <Link
                href="https://tinyurl.com/yc2ekzfd"
                className="social-icon"
                title="Facebook"
                target="_blank">
                <GrFacebook size={19} className="text-fbColor" />
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="https://tinyurl.com/3xneh8zm"
                className="social-icon"
                title="LinkedIn"
                target="_blank">
                <GrLinkedin size={19} className="text-linkedinColor" />
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="skype:huutrung.mmt?chat"
                className="social-icon"
                title="Skype"
                target="_blank">
                <GrSkype size={19} className="text-skypeColor" />
              </Link>
            </li>
            <li role="presentation">
              <Link
                href="https://tinyurl.com/yx9dy849"
                className="social-icon"
                title="Github"
                target="_blank">
                <GrGithub size={19} />
              </Link>
            </li>
          </ul>
          <p className="font-primary mt-2 text-center md:mt-0 md:text-left">
            {t('footer_copyright', { date: new Date().getFullYear() })} {t('footer_design_by')}{' '}
            <a
              href="https://tinyurl.com/yc2ekzfd"
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
