import {ModeToggle} from "@/components/ThemeToggler.tsx";
import {ThemeProvider} from "@/components/ThemeProvider.tsx";

function Navigation() {
    return (
        <ThemeProvider defaultTheme={"system"} storageKey={"vite-ui-theme"}>
            <div className={"w-screen dark:border-violet-500 mx-auto py-5 border-b"}>
                <div className={"flex justify-around mx-auto"}>
                    <span className={"font-bold text-violet-800 dark:text-violet-500 font-serif text-3xl"}>zenith 🌑</span>
                    <ModeToggle/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Navigation;