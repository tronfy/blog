const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/(^.\/)|\..*/g, '')
    .trim()
    .replace(/\s/g, '-')
}
export default slugify
