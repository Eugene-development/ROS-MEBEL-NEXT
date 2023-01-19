import Header from './Header';
import Footer from './Footer';
import Banner from '../Main/Banner';
import FormMeasurement from '@/components/Main/Forms/Measurement';

const MainLayout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <Banner/>
            <Header/>
                <main>{children}</main>
            <Footer/>
            <FormMeasurement/>
        </div>
    )
}

export default MainLayout
