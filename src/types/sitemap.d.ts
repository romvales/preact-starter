type SitemapContent = {
  htmlId: string,
  smapCat: SitemapCategory[]
  socialLinks: SitemapSocialLink[]
}

type SitemapCategory = {
  name: string
  type: 'dropdown' | 'links'
  updatedAt: string
  contents: SitemapCategoryLinks | SitemapCategoryDropdown
}

type SitemapCategoryDropdown  = {
  name: string
  updatedAt: string
  links: SitemapCategoryLinks
}

type SitemapCategoryLinks = {
  name: string
  updatedAt: string
  url: string
}[]

type SitemapSocialLink = {
  platform: 'facebook' | 'twitter' | 'youtube' | 'reddit' | 'linkedin' | 'pinterest'
  updatedAt: string
  url: string
}
