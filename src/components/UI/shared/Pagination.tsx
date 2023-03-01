import clsx from 'clsx'
import Link from 'next/link'

import styles from '@/styles/modules/Pagination.module.scss'

export default function Pagination() {
  return (
    <nav
      className="flex items-center justify-between overflow-auto border-t border-solid border-borderColor py-7.5 text-center"
      aria-label="pagination">
      <a title="" href="#" className="btn-small pagination-back">
        Back
      </a>
      <ul className="pagination hidden md:flex">
        <li className={clsx(styles['pagination-active'])}>
          <Link className={clsx(styles['pagination-page-link'])} href="#">
            1 <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li>
          <Link className={clsx(styles['pagination-page-link'])} href="#">
            2
          </Link>
        </li>
        <li>
          <Link className={clsx(styles['pagination-page-link'])} href="#">
            3
          </Link>
        </li>
        <li>
          <Link className={clsx(styles['pagination-page-link'])} href="#">
            ...
          </Link>
        </li>
        <li>
          <Link className={clsx(styles['pagination-page-link'])} href="#">
            25
          </Link>
        </li>
      </ul>
      <Link className="btn-small pagination-next" href="#">
        Next
      </Link>
    </nav>
  )
}
