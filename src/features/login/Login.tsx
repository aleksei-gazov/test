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


Create New Password
import { FieldValues } from 'react-hook-form'
import { useRouter } from 'next/router'

import formCls from 'features/auth/logOut/ui/AuthFormsStyles.module.scss'
import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { useCreateNewPasswordMutation } from 'features/auth/ сreateNewPassword /service/сreateNewPassword'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { PATH } from 'shared/const/path'

export const CreateNewPasswordForm = memo( () => {
  const [createNewPassword, { isLoading }] = useCreateNewPasswordMutation ()
  const router = useRouter()
const { id } = router.query

  const {
    errorPassword,
    errorConfirmPassword,
    isValid,
    register,
    handleSubmit,
  } = useFormHandler('password', 'confirmPassword')

  const dispatch = useAppDispatch()
  const onSubmit = (data: FieldValues) => {
    const payload = {
     newPassword: data.password,
     recoveryCode: id
    }
createNewPassword(payload)
      .unwrap()
      .then(() => {
  router.push(PATH.LOGIN)
      })
  }

  if (isLoading) return <Loader />

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Text
        tag={'h2'}
        className={formCls.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
Create New Password
      </Text>
      <Input
        register={register}
        nameForValidate={'password'}
        error={errorPassword}
        type={'password'}
        placeholder={'Password'}
        title={'Password'}
        className={cls.mb36}
      />

      <Input
        register={register}
        nameForValidate={'confirmPassword'}
        error={errorConfirmPassword}
        type={'password'}
        placeholder={'Password confirmation'}
        title={'Password confirmation'}
        className={cls.mb36}
      />

      <Button
        disabled={!isValid}
        type={'submit'}
        className={cls.mb18}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
Create New Password
        </Text>
      </Button>
    </form>
  )
})

Type
export type NewPasswordParamsType = {
newPassword: string
recoveryCode: string
}

API
import { NewPasswordParamsType } from './types'

import { setToken } from 'features/auth/login/model/slice/loginSlice'
import { baseAPI } from 'shared/api/baseAPI'

export const createNewPassword = baseAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<void, NewPasswordParamsType>({
      query: arg => ({
        url: `/api/auth/new-password`,
        method: 'Post',
        body: arg,
      }),
    }),
  }),
})
export const { useCreateNewPasswordMutation } = createNewPassword

captcha
темная тема data-theme











Inctagram
const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

return (
<div className={s.createPhoto}>
      <Text
        tag={'h2'}
        className={formCls.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
Add a Profile Photo      </Text>
<div>

</div>
</div>
)




