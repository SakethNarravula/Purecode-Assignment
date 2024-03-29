import { Suspense } from "react";
import { Footer, Preloader } from "../components/FooterLinks";
import {Preloader} from '../components/Preloader'
import {Navbar } from "../components/layout/admin/Navbar";
import {Topbar } from '../components/layout/admin/TopbarAdmin';

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
