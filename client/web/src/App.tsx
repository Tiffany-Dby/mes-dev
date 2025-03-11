import BaseLayout from "@/shared/ui/components/BaseLayout";
import { BrowserRouter } from "react-router";
import SignInCard from "@/users/ui/components/SignInCard";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <div className="container mx-auto py-5 px-4">
          <SignInCard />
        </div>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
