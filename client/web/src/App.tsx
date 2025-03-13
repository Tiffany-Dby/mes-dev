import BaseLayout from "@/shared/ui/components/BaseLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpCard from "@/users/ui/components/SignUpCard";
import { AppRoutes } from "@/shared/types/Routes";
import SignInCard from "@/users/ui/components/SignInCard";
import Home from "@/shared/views/Home";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";

const App = () => {
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
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
