import { Header } from "./components/header";
import { SubHeader } from "./components/subHeader";
import { UserPage } from "./user";

export function App() {
    return(
        <div className="">
            <Header /> 
            <SubHeader />
            <UserPage />
        </div>

        
    )
}