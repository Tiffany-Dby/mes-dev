import BaseLayout from "@/shared/ui/components/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpCard from "@/users/ui/components/SignUpCard";
import { AppRoutes } from "@/shared/types/Routes";
import SignInCard from "@/users/ui/components/SignInCard";
import Home from "@/shared/views/Home";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import Dashboard from "@/users/ui/components/Dashboard";
import { useAuth } from "@/users/context/AuthContext";
import PrivateRoutes from "./users/context/PrivateRoutes";

const App = () => {
  const { isAuthenticated } = useAuth();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.025 });

  return (
    <BrowserRouter>
      <BaseLayout isIntersecting={isIntersecting}>
        <Routes>
          <Route path={AppRoutes.home} element={<Home ref={ref} />} />
          <Route
            path={AppRoutes.signUp}
            element={
              <div className="max-w-xl w-full mx-auto py-5 px-4">
                <SignUpCard />
              </div>
            }
          />
          <Route
            path={AppRoutes.signIn}
            element={
              <div className="max-w-xl w-full mx-auto py-5 px-4">
                <SignInCard />
              </div>
            }
          />
          <Route path={AppRoutes.home} element={<p>Home</p>} />

          <Route
            path={AppRoutes.account}
            element={
              <PrivateRoutes hasAccess={isAuthenticated}>
                <div className="max-w-xl w-full mx-auto py-5 px-4">
                  <Dashboard />
                </div>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
