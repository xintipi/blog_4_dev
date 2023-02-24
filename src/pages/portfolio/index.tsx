import { GetStaticPropsContext } from 'next'

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    redirect: {
      destination: '/portfolio/all',
      permanent: false,
    },
  }
}

export default function Portfolio() {}
