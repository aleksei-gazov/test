import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputPropsType = {
    onEnter: (value: string) => void
    labelMessage: string
    widthInput: string
}


export const InputField: FC<InputPropsType> = memo(({onEnter, labelMessage, widthInput}) => {
    const [value, setValue] = useState('')
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter(value)
            setValue('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <Box
            sx={{
                '& > :not(style)': {m: 1, width: `${widthInput}`, backgroundColor: 'white'},
            }}>
            <TextField
                onKeyDown={onKeyDownHandler}
                id="outlined-basic"
                label={labelMessage}
                variant="outlined"
                onChange={onChangeHandler}
                value={value}
            />
        </Box>
    );
})