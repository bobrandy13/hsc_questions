import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";
export default async function Home() {
  return (
    <div>
      <h2>Hello world</h2>
      <Button>Hello world</Button>
    </div>
  );
}
