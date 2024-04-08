import {hasLength, isEmail, isNotEmpty, useForm} from "@mantine/form";
import {Button, Center, Container, Flex, Input, Title} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useRegistrationMutation} from "../store/api.js";
import {useEffect} from "react";
import {notifications} from "@mantine/notifications";

const Registration = () => {
    const [registration, {isSuccess}] = useRegistrationMutation()
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
    const navigate = useNavigate()

    const handleSubmit = (value) => {
        registration(value)
    }

    useEffect(() => {
        if(isSuccess){
            notifications.show({
                title: 'Успешно',
                message: 'Аккаунт зарегистрирован!'
            })
            navigate('/login')
        }
    }, [isSuccess])

    return (
        <Container fluid className='page'>
            <Title align='center' order={1}>Регистрация</Title>
            <Container size='xs' mt='md'>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Flex direction='column' gap='md'>
                        <Input placeholder='Имя' {...form.getInputProps('name')}/>
                        <Input placeholder='Город' {...form.getInputProps('city')}/>
                        <Input placeholder='E-mail' {...form.getInputProps('email')}/>
                        <Input placeholder='Пароль' type='password' {...form.getInputProps('password')}/>
                    </Flex>
                    <Center>
                        <Button type='submit' size='md' mt='lg'>Зарегистрироваться</Button>
                    </Center>
                </form>
            </Container>
        </Container>
    );
};

export default Registration;
