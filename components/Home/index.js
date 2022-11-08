import NavBar from 'components/NavBar'
import styles from './styles'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-wrapper">HomePage</div>
      <style jsx>{styles}</style>
    </>
  )
}

export default Home