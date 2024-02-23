"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  mode?: "modal" | "redirect";
}

const onClick = () => {
  console.log("login button clicked");
};


export const LoginButton = ({ children, asChild, mode }: LoginButtonProps) => {

    if(mode === "modal"){
        return <span >to do implement modal</span>
    }

  return(
    <span onClick={onClick}>{children}</span>
  ) 
};
