import {useState} from 'react';
import {Button, Container, Flex, TextInput} from "@mantine/core";
import {hasLength, isEmail, isNotEmpty, useForm} from "@mantine/form";
import './ProfileTab.scss'

const ProfileTab = () => {
    const [isEdit, setIsEdit] = useState(false)

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

    return (
        <Container size='sm' mt='md'>
            {!isEdit ?
                <Flex direction='column' gap='xs'>
                    <TextInput disabled label='Имя'/>
                    <TextInput disabled label='Город'/>
                    <TextInput disabled label='E-mail'/>
                    <Button
                        size='md'
                        mt='md'
                        onClick={() => setIsEdit(true)}
                        style={{alignSelf: 'center', width: '40%'}}
                    >Редактировать</Button>
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
