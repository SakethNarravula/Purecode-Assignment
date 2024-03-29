import { Toaster } from "sonner";
import { configureFakeBackend } from "./common/fake-backend";

// styles
import "./assets/css/style.css";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      <AllRoutes />
      <BackToTop />
      <Toaster richColors />
    </AppProvidersWrapper>
  );
};

export default App;