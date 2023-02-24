import { PageObject, QueryDatabaseResponse } from '@/interface/responseNotion.interface'

const _validPageObject = (response: QueryDatabaseResponse) => {
  return response.results.filter((pageObject: PageObject) => pageObject.properties)
}

export { _validPageObject }
