import { motion } from "framer-motion";
import Header from './Header';
import Footer from './Footer';
import Banner from '../Main/Banner';
import FormMeasurement from '@/components/Main/Forms/Measurement';

const MainLayout = ({ children }) => {

    return (
        <>
        <div className="min-h-screen">

            <Banner/>
            <Header/>
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{children}</motion.main>
            <Footer/>
            <FormMeasurement/>
        </div>
        {/* <style jsx>
            {
                `
                 scroll {
                        overflow-y: scroll;
                        scroll-behavior: smooth;
                    }
                `


            }

        </style> */}

        </>
    )
}

export default MainLayout
