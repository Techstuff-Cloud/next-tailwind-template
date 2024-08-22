import { Textarea } from "@/components/ui/textarea";
import Page from "@/components/ComponentWrapper";

const TextareaComponent = () => {
  return <Textarea placeholder="Type your message here." />;
};

export default Page(TextareaComponent);
