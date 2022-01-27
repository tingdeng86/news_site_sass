import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        
        <PageHome />
        <Footer />
      </div>
    </BrowserRouter>
    )
}

export default AppRouter;