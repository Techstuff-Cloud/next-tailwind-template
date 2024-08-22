import { Toggle } from "@/components/ui/toggle";
import Page from "@/components/ComponentWrapper";

const ToggleComponent = () => {
  return (
    <>
      <Toggle aria-label="Toggle italic">Toggle</Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        Toggle
      </Toggle>
    </>
  );
};
export default Page(ToggleComponent);
