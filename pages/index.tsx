import type { NextPage } from 'next'
import Head from 'next/head'
import useListItems from '../api/useListItems'
import ListViewer from '../components/ListViewer'

const Index: NextPage = () => {
  const { data, error } = useListItems('https://fetch-hiring.s3.amazonaws.com/hiring.json')

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Fetch Exercise App</title>
        <meta name="description" content="A coding exercise for Fetch Rewards FE Engineering." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ListViewer lists={data}></ListViewer>
      </main>
    </div>
  )
}

export default Index
