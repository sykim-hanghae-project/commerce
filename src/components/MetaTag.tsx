import { Helmet } from "react-helmet-async"

interface MetaTagProps {
  title?: string,
  description?: string,
  url?: string,
  imgsrc?: string
}

const MetaTag = ({ title, description, url, imgsrc }: MetaTagProps) => {
  const defaultTitle = 'XSO'
  const defaultUrl = 'https://commerce-seven-chi-53.vercel.app/'
  const defaultImgsrc = `/concept-image.jpg`
  
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>

      {description && <meta name="description" content={description} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? url : defaultUrl} />
      <meta property="og:title" content={title ? title : defaultTitle} />
      <meta property="og:image" content={imgsrc ? imgsrc : defaultImgsrc} />
      {description && <meta property="og:description" content={description} />}

    </Helmet>
  )
}

export default MetaTag