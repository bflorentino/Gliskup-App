import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";

export const useNotification = (state = {}) => {

    const [ notificationParams, setNotificationParams ] = useState(state);
    const { enqueueSnackbar } = useSnackbar();

    const showNotification = useCallback(() => {
        if(notificationParams.message){
            enqueueSnackbar(notificationParams.message, {variant: notificationParams.variant})
        }
    }, [enqueueSnackbar, notificationParams])

    const handleNotificationParams = useCallback((message, variant) => {
        setNotificationParams({
            message,
            variant
        })
    }, [])

    return {showNotification, handleNotificationParams, notificationParams}
}