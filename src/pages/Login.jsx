import {Button, Center, Container, Flex, Input, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {Link, useNavigate} from "react-router-dom";
import {useLoginMutation} from "../store/api.js";
import {useEffect} from "react";

const Login = () => {
    const [login, {data}] = useLoginMutation()
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
    })
    const navigate = useNavigate()

    const handleSubmit = (value) => {
        login(value)
    }

    useEffect(() => {
        if(data){
            localStorage.setItem('token', data.token)
            navigate('/')
        }
        else if(localStorage.getItem('token')){
            navigate('/')
        }
    }, [data]);

    return (
        <Container fluid className='page'>
            <Title align='center' order={1}>Войти в аккаунт</Title>
            <Container size='xs' mt='md'>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Flex direction='column' gap='md'>
                        <Input placeholder='E-mail' {...form.getInputProps('email')}/>
                        <Input placeholder='Пароль' type='password' {...form.getInputProps('password')}/>
                    </Flex>
                    <Flex direction='column' align='center' gap='sm' mt='md'>
                        <Link to='/registration'>Нет аккаунта? Зарегистрироваться.</Link>
                        <Button type='submit' size='md'>Войти</Button>
                    </Flex>
                </form>
            </Container>
        </Container>
    );
};

export default Login;
