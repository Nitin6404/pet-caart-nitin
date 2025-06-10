import Header from '../../components/Heaser.jsx'
import Category from '../../components/Category.jsx'
import Applod from '../../components/Applod.jsx'
import Essential from '../../components/Essential.jsx'
import Trending from '../../components/Treanding.jsx'
import Promotions from '../../components/Promotions.jsx'
import NewLaunched from '../../components/NewLaunched.jsx'
import CouponSection from '../../components/CouponSection.jsx'
import CatsLife from '../../components/CatsLife.jsx'
import TreatSection from '../../components/TreatSection.jsx'
import Footer from '../../components/Footer.jsx'
import BestSellers from '../../components/BestSellers.jsx'

const HomePage = () => {

  return (
    <div>
      <Header />
      <Category />
      <Applod />
      <Essential />
      <Trending />
      <Promotions />
      <NewLaunched />
      <CouponSection />
      <BestSellers />
      <CatsLife />
      <TreatSection />
      <Footer />
    </div>
  )
}


export default HomePage;