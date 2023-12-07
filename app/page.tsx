import Header from './layout/header'
import Sidebar from './layout/sidebar'
import Main from './layout/main'
export default function Home() {
  return (
    <div>
      <h1 className='bg-teal-800 h-screen w-full'>
        <Header />
        <Sidebar/>
        <Main/>
      </h1>
    </div>
  )
}
