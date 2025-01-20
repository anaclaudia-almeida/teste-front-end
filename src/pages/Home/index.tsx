import BannerApoio from "../../components/BannerGrid"
import BannerHome from "../../components/BannerHome"
import CategorySlider from "../../components/CategorySlider"
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import TopBar from "../../components/TopBar"

function Home () {
  return (
    <div>
      <h1>Home</h1>
    <TopBar />
    <Header />
    <NavBar />
    <BannerHome />
    <CategorySlider />
    <BannerApoio />
    <BannerApoio />
    </div>
  )
}

export default Home