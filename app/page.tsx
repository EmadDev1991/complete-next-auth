import { LoginButton } from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Home = () => {
  return (
    <main className="flex bg-background  h-full items-center justify-center bg-sky-600  ">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold  text-white drop-shadow-md",
            font.className
          )}
        >
          🔒Auth
        </h1>
        <p className="text-white text-lg">simple authentication service</p>
        <LoginButton >
          <Button variant="secondary" size="lg">
            Click Me
          </Button>
        </LoginButton>
      </div>
    </main>
  );
};
export default Home;
