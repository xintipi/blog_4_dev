import clsx from 'clsx'
import { ImageLoaderProps } from 'next/image'
import { useTranslation } from 'next-i18next'
import { AiOutlineWarning } from 'react-icons/ai'

import ProjectCard from '@/components/UI/shared/ProjectCard'
import Tabs from '@/components/UI/shared/Tabs'
import { IProjectList } from '@/interface/portfolio.interface'

type IPortfolioSection = {
  data: IProjectList[]
  images: ImageLoaderProps[]
}

export default function PortfolioSection({ data, images }: IPortfolioSection) {
  const { t } = useTranslation('portfolio')
  return (
    <>
      <Tabs
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
            {data.length > 0 &&
              data.map((item, index) => (
                <ProjectCard key={index} item={item} image={images[index]} />
              ))}
          </div>
        }
      />
    </>
  )
}
