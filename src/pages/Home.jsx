import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
    return (
    <div className="min-n-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}   
    <ThemeToggle/>
    {/* Background Effect*/} 
    <StarBackground/>
    {/* Navbar*/}  

    {/* Main Content*/} 

    {/* Footer */}
    </div>
    );
};
