import { Button } from "@/components/ui/button";
import Page from "@/components/ComponentWrapper";

const ButtonComponent = () => {
  return (
    <div className="flex mx-40 flex-wrap gap-x-20 gap-y-10">
      <Button>primary</Button>

      <Button variant="secondary" className="bg-secondary-400-500-token">
        Secondary
      </Button>

      <Button variant="destructive">destructive/error</Button>

      <Button variant="outline">outline</Button>

      <Button variant="ghost">ghost</Button>

      {/*  skeleton buttons */}
      <Button className="bg-tertiary">tertiary</Button>

      <Button className="bg-warning">warning</Button>

      <Button className="bg-success">success</Button>
    </div>
  );
};

export default Page(ButtonComponent);
