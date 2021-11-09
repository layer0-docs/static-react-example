import Seo from './Seo'
import ListItem from './ListItem'
import { getCategory } from '../lib/cms'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductListingPage({ match }) {
  let location = useLocation()
  const { slug } = match.params
  const [products, setProducts] = useState()
  const [meta, setMeta] = useState({})
  useEffect(async () => {
    if (slug) {
      const { products } = await getCategory(slug)
      setProducts(products)
      setMeta({
        title: slug,
        description: slug,
        url: `https://layer0-docs-layer0-next-example-default.layer0.link/category/${slug}`,
        image: `https://layer0-docs-og-image-default.layer0.link/api?title=${slug}&width=1400&height=720`,
      })
    }
  }, [location])
  return (
    <>
      <Seo {...meta} />
      <div className="flex flex-col items-center">
        <div className="mt-10 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products &&
            products.map((product) => {
              return <ListItem key={product['_id']} product={product} />
            })}
        </div>
      </div>
    </>
  )
}
