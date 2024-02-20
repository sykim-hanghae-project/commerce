import { Helmet } from "react-helmet-async"

interface MetaTagProps {
  title?: string,
  description?: string,
  url?: string,
  imgsrc?: string
}

const MetaTag = ({ title, description, url, imgsrc }: MetaTagProps) => {
  const defaultTitle = 'XSO'
  const defaultUrl = 'https://sykim-hanghae-project.github.io/commerce'
  const defaultImgsrc = "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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