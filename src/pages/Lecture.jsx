import {Link, useParams} from "react-router-dom";
import {useGetLectureContentQuery} from "../store/api.js";
import {Container, Flex, Loader, Text, Title} from "@mantine/core";

const Lecture = () => {
    const {id} = useParams()

    const {data, isLoading} = useGetLectureContentQuery(id)

    if(isLoading){
        return <Loader size='xl' mt='xl' ml='xl'/>
    }
    return (
        <Container fluid p='md'>
            <Flex justify='center' align='baseline'>
                <Link to='/lectures' style={{marginRight: 'auto'}}>К лекциям</Link>
                <Title order={2} style={{marginRight: 'auto'}}>{data.title}</Title>
            </Flex>
            <Container size='md' mt='md'>
                <Text>{data.content}</Text>
            </Container>
        </Container>
    );
};

export default Lecture;
