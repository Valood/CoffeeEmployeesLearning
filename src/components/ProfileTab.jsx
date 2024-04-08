import {useState} from 'react';
import {Button, Container, Flex, Loader, TextInput} from "@mantine/core";
import {hasLength, isEmail, isNotEmpty, useForm} from "@mantine/form";
import './ProfileTab.scss'
import {api, useGetUserInfoQuery} from "../store/api.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const ProfileTab = () => {
    const {data: user, isLoading} = useGetUserInfoQuery()

    const [isEdit, setIsEdit] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const form = useForm({
        initialValues: {
            name: '',
            city: '',
            email: '',
            password: ''
        },
        validate: {
            name: isNotEmpty(),
            city: isNotEmpty(),
            email: isEmail('Некорректный формат почты'),
            password: hasLength({min: 6}, 'Пароль должен быть длиной не менее 6 символов')
        }
    })

    const handleSubmit = (value) => {
        console.log(value)
        setIsEdit(false)
    }

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(api.util.resetApiState())
        navigate('/login')
    }

    if(isLoading){
        return <Loader size='xl' ml='xl' mt='xl'/>
    }
    return (
        <Container size='sm' mt='md'>
            {!isEdit ?
                <Flex direction='column' gap='xs'>
                    <TextInput value={user.name} disabled label='Имя'/>
                    <TextInput value={user.city} disabled label='Город'/>
                    <TextInput value={user.email} disabled label='E-mail'/>
                    <TextInput value={user.role} disabled label='Должность'/>
                    <Flex justify='center' gap='md'>
                        <Button
                            size='md'
                            mt='md'
                            color='red'
                            style={{alignSelf: 'center', width: '40%'}}
                            onClick={() => logout()}
                        >Выйти</Button>
                    </Flex>

                </Flex> :
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Flex direction='column' gap='xs'>
                        <TextInput
                            label='Имя'
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label='Город'
                            {...form.getInputProps('city')}
                        />
                        <TextInput
                            label='E-mail'
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            label='Пароль'
                            type='password'
                            {...form.getInputProps('password')}
                        />
                        <Flex justify='center' gap='md'>
                            <Button
                                type='button'
                                size='md'
                                mt='md'
                                color='red'
                                style={{width: '40%'}}
                                onClick={() => setIsEdit(false)}
                            >Отмена</Button>
                            <Button
                                type='submit'
                                size='md'
                                mt='md'
                                style={{width: '40%'}}
                            >Сохранить изменения</Button>
                        </Flex>
                    </Flex>
                </form>
            }
        </Container>
    );
};

export default ProfileTab;
