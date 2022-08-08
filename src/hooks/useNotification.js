import { useSnackbar } from "notistack";
import { useState } from "react";

export const useNotification = (state = {}) => {

    const [ notificationParams, setNotificationParams ] = useState(state);
    const { enqueueSnackbar } = useSnackbar();

    const showNotification = () => {
        if(notificationParams.message){
            enqueueSnackbar(notificationParams.message, {variant: notificationParams.variant})
        }
    }

    const handleNotificationParams = (message, variant) => {
        setNotificationParams({
            message,
            variant
        })
    }
    return {showNotification, handleNotificationParams}
}