import React from 'react';

import {yupResolver} from '@hookform/resolvers/yup';
import {Button, InputLabel, Paper, Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import {useForm} from 'react-hook-form'
import {selectIsLoggedIn} from 'features/login/loginSelectors';
import {useAppSelector} from 'common/hook/hooks';
import {userSliceActions} from 'features/login/loginSlice';
import {useActions} from 'common/hook/useActions'
import {UserType} from 'features/login/loginType';
import {Navigate} from 'react-router-dom'
import {loginValidatorschema} from 'common/constants/loginValidator';


export const Login = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {setDataUser, IsEntrance} = useActions(userSliceActions)

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            idInstance: '',
            apiTokenInstanc: '',
        },
        resolver: yupResolver(loginValidatorschema),
    })

    const onSubmit = (data: UserType) => {
        IsEntrance(true)
        setDataUser(data)
    }

    if (isLoggedIn) {
        return <Navigate to={'/chatList'}/>
    }

    return (
        <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
            <Paper sx={{padding: '20px', marginTop: 6}}>
                <FormControl>
                    <Typography
                        marginBottom={'20px'}
                        component="h1"
                        sx={{fontSize: '26px', fontWeight: '600'}}
                    >
                        Введите свои учетные данные
                    </Typography>
                    <form
                        onSubmit={handleSubmit(data => {
                            onSubmit(data)
                        })}
                    >
                        <FormGroup sx={{alignItems: 'center', fontSize: '16px', fontWeight: '500'}}>
                            <FormControl sx={{width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">IdInstance</InputLabel>
                                <Input id="standard-adornment-password" type={'text'} {...register('idInstance')} />
                            </FormControl>
                        </FormGroup>
                        <FormGroup sx={{alignItems: 'center', fontSize: '16px', fontWeight: '500'}}>
                            <FormControl sx={{width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">ApiTokenInstanc</InputLabel>
                                <Input id="standard-adornment-password"
                                       type={'text'} {...register('apiTokenInstanc')} />
                            </FormControl>
                            <Button
                                type={'submit'}
                                style={{
                                    borderRadius: '30px',
                                    marginTop: '40px',
                                    width: '100%',
                                    padding: '17px 0',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                Войти
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Paper>
        </Grid>
    )
}