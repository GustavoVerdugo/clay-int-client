import { useGetQuery, useGetQueryOptions } from "@/hooks/useRequest"

export const getTranslationsByLang = (lang: string, options?: useGetQueryOptions) => {
  return useGetQuery('Get translations by lang', `/translations/all/language/${lang}`, <any>{
    enabled: true,
    retry: true,
    ...options
  })
}
