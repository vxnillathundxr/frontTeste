import { Header } from "./components/header";
import { Shirts } from "./components/shirts";

export function App() {
    return(
        <div className="flex gap-2">
            <Header /> 
            <Shirts />
        </div>

        
    )
}