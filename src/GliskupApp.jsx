import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./routers/AppRouter";
import { SnackbarProvider } from 'notistack';

export const GliskuApp = () => {
    return(
        <Provider store={store}>
            <SnackbarProvider maxSnack={1} >
            <AppRouter />
            </SnackbarProvider>
        </Provider>
    )
}