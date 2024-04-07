import {Button, Flex, Modal, Textarea, TextInput} from "@mantine/core";
import {isNotEmpty, useForm} from "@mantine/form";

const AddLectureModal = ({opened, onClose}) => {
    const form = useForm({
        initialValues: {
            title: '',
            content: ''
        },
        validate: {
            title: isNotEmpty(),
            content: isNotEmpty()
        }
    })

    const handleSubmit = (value) => {
        console.log(value)
        onClose()
        form.reset()
    }

    return (
        <Modal opened={opened} onClose={onClose} size='xl' title='Добавить лекцию'>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Flex direction='column' gap='sm'>
                    <TextInput label='Название лекции' {...form.getInputProps('title')}/>
                    <Textarea label='Контент' {...form.getInputProps('content')} rows={6}/>
                </Flex>
                <Flex justify='end' gap='md'>
                    <Button color="red" type='button' size='md' mt='lg' style={{width: '20%'}} onClick={onClose}>Отмена</Button>
                    <Button type='submit' size='md' mt='lg' style={{width: '20%'}}>Добавить</Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default AddLectureModal;
