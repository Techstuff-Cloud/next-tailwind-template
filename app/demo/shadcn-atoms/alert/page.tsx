import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Page from '@/components/ComponentWrapper';

const AlertDemo = () => {
  return (
    <>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Page(AlertDemo);
