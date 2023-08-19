import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 -mb-8">
        About us
      </h1>
      {allAuthors.map((author) => {
        if (author._id.includes('default')) return null
        const mainContent = coreContent(author)
        return (
          <AuthorLayout key={author._id} content={mainContent}>
            <div key={author.slug}>
              <h1>{author.name}</h1>
              <MDXLayoutRenderer code={author.body.code} />
            </div>
          </AuthorLayout>
        )
      })}
    </>
  )
}
