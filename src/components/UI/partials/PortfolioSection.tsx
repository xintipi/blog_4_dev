import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { AiOutlineWarning } from 'react-icons/ai'

import ProjectCard from '@/components/UI/shared/ProjectCard'
import Tabs from '@/components/UI/shared/Tabs'
import { IProjectCard } from '@/pages/portfolio'

type IPortfolioSection = {
  data: IProjectCard[]
  query: string
}

export default function PortfolioSection({ data, query }: IPortfolioSection) {
  const { t } = useTranslation('portfolio')
  return (
    <>
      <Tabs
        query={query}
        containerRender={
          <div className="portfolio">
            <p
              className={clsx({
                'portfolio-empty filter-empty my-2.5 flex items-center': true,
                hidden: data.length,
              })}>
              <AiOutlineWarning size={30} className="mr-2.5" />
              {t('portfolio_empty_item')}
            </p>
            {data.map((item, index) => (
              <ProjectCard key={index} item={item} />
            ))}
          </div>
        }
      />
    </>
  )
}
