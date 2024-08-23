import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Page from "@/components/ComponentWrapper";

const SwitchComponent = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default Page(SwitchComponent);
