import {Card, Container, Flex, Title, Text, Button, Loader} from "@mantine/core";
import {Link, useNavigate} from "react-router-dom";
import AddLectureModal from "../components/AddLectureModal.jsx";
import {useDisclosure} from "@mantine/hooks";
import {useGetLecturesQuery, useGetUserInfoQuery} from "../store/api.js";
import {useEffect} from "react";

const Lectures = () => {
    const {data, isLoading: isLoadingUserInfo} = useGetUserInfoQuery()
    const {data: lections, isLoading: isLoadingLections} = useGetLecturesQuery()
    const navigate = useNavigate()
    const [opened, { open, close }] = useDisclosure(false);

    if (isLoadingUserInfo || isLoadingLections){
        return <Loader size='xl' mt='xl' ml='xl'/>
    }
    return (
        <Container fluid className='page'>
            <Flex justify='center' align='baseline'>
                <Title align='center' order={1} style={{marginLeft: 'auto', marginRight: data?.role === 'hr' ? '' : 'auto'}}>Лекции</Title>
                {data?.role === 'hr' && <Button style={{marginLeft: 'auto'}} onClick={open}>Доабвить лекцию</Button>}
            </Flex>
            <Flex gap='sm' mt='md' wrap='wrap'>
                {lections.map((lection, i) => <Card shadow='md' padding='md' withBorder key={i}>
                    <Flex direction='column' gap='xs'>
                        <Link to={`/lectures/${lection.id}`}>
                            <Text fw={500}>{lection.title}</Text>
                        </Link>
                        <Button onClick={() => navigate(`/lectures/${lection.id}`)}>Посмотреть</Button>
                    </Flex>
                </Card>)}
            </Flex>
            <AddLectureModal opened={opened} onClose={close}/>
        </Container>
    );
};

export default Lectures;
