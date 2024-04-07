import {Card, Container, Flex, Title, Text, Button} from "@mantine/core";
import {Link} from "react-router-dom";
import AddLectureModal from "../components/AddLectureModal.jsx";
import {useDisclosure} from "@mantine/hooks";

const Lectures = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Container fluid className='page'>
            <Flex justify='center' align='baseline'>
                <Title align='center' order={1} style={{marginLeft: 'auto'}}>Лекции</Title>
                <Button style={{marginLeft: 'auto'}} onClick={open}>Доабвить лекцию</Button>
            </Flex>
            <Flex gap='sm' mt='md'>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Flex direction='column' gap='xs'>
                        <Link to='/lectures/1'>
                            <Text fw={500}>Название лекции</Text>
                        </Link>
                        <Button>Посмотреть</Button>
                    </Flex>
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Flex direction='column' gap='xs'>
                        <Text fw={500}>Название лекции</Text>
                        <Button>Посмотреть</Button>
                    </Flex>
                </Card>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Flex direction='column' gap='xs'>
                        <Text fw={500}>Название лекции</Text>
                        <Button>Посмотреть</Button>
                    </Flex>
                </Card>
            </Flex>
            <AddLectureModal opened={opened} onClose={close}/>
        </Container>
    );
};

export default Lectures;
