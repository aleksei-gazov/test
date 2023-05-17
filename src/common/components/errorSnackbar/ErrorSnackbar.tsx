import React from 'react';
import {AlertProps, Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {useAppSelector} from 'common/hook/hooks';
import { useActions } from 'common/hook/useActions';
import { selectError } from 'features/chatList/chatListSelectors';
import {chatListSliceActions} from 'features/chatList/chatListSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackbar = () => {
    const error = useAppSelector(selectError);
    const {setError} = useActions(chatListSliceActions);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setError({error: null});
    };

    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}
