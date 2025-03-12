import BaseLayout from "@/shared/ui/components/BaseLayout";
import { BrowserRouter } from "react-router";
import SignUpCard from "@/users/ui/components/SignUpCard";

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <div className="max-w-xl w-full mx-auto py-5 px-4">
          <SignUpCard />
        </div>
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
