import {Button, Center, Container, Flex, Input, Title} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
    })
    const navigate = useNavigate()

    const handleSubmit = (value) => {
        console.log(value)
        navigate('/')
    }

    return (
        <Container fluid className='page'>
            <Title align='center' order={1}>Войти в аккаунт</Title>
            <Container size='xs' mt='md'>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Flex direction='column' gap='md'>
                        <Input placeholder='E-mail' {...form.getInputProps('email')}/>
                        <Input placeholder='Пароль' type='password' {...form.getInputProps('password')}/>
                    </Flex>
                    <Center>
                        <Button type='submit' size='md' mt='lg'>Войти</Button>
                    </Center>
                </form>
            </Container>
        </Container>
    );
};

export default Login;
