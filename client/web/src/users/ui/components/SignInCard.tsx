import { Input } from "@/lib/components/ui/input";
import { Label } from "@/lib/components/ui/label";
import BaseCard from "@/shared/ui/components/BaseCard";

const SignInCard = () => {
  return (
    <BaseCard
      title={<h1>Connexion</h1>}
      content={
        <form>
          <div>
            <Label htmlFor="firstname">Prénom</Label>
            <Input type="text" id="firstname" name="firstname" />
          </div>
        </form>
      }
    />
  );
};
export default SignInCard;
