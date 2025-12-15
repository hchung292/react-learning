import { Header } from '../components/Header';
import './NotFoundPage.css'

export function NotFoundPage() {
    return(
        <>
            <Header />
            <title>Page not Found</title>

            <div class="not-found-page">
                <h1>Error 404</h1>
            </div>
        </>
    );
}