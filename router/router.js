import { Error404 } from "../componts/view/404";
import { Login } from "../componts/view/login";
import { Vacancies } from "../componts/view/vacancies";

export function Router() {
    const app = document.getElementById("app");
    const hash = window.location.hash || "#home";

    switch (hash) {
        case "#home":
            app.innerHTML = Login()
            break;
        
        case "#vacancies":
            app.innerHTML = Vacancies()
            break;

        default:
            app.innerHTML = Error404()
            break;
    }


}