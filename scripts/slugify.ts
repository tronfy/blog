import libSlugify from 'slugify'

const slugify = (text: string): string => {
  return libSlugify(text.toLowerCase().replace(/(^.\/)|\..*/g, '')).trim()
}
export default slugify
