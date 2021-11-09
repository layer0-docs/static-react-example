import Seo from './Seo'

const Home = () => {
  const meta = {
    title: 'Layer0 React Example',
    description:
      'This open source project demonstrates Prefetching, and Image Optimization with Layer0 using React.',
    url: 'https://layer0-docs-layer0-react-example-default.layer0.link',
    image:
      'https://layer0-docs-og-image-default.layer0.link/api?title=Layer0 React Example&width=1400&height=720',
  }
  return (
    <>
      <Seo {...meta} />
      <div className="flex flex-col justify-center items-center w-full min-h-[75vh]">
        <p className="text-center">
          This is an example React app powered by Layer0. Click a category above to get started.
        </p>
      </div>
    </>
  )
}

export default Home
