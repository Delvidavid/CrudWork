
import { Error404 } from "../componts/view/404.js";
import { Candidates } from "../componts/view/candidates.js";
import { Login } from "../componts/view/login.js";
import { Vacancies } from "../componts/view/vacancies.js";

export function Router() {
    const app = document.getElementById("app");
    const hash = window.location.hash || "#home";

    switch (hash) {
        case "#login":
            app.innerHTML = Login()
            break;
        
        case "#vacancies":
            app.innerHTML = Vacancies()
            break;

        case "#candidates":
            app.innerHTML = Candidates()
            break;

        default:
            app.innerHTML = Error404()
            break;
    }

}