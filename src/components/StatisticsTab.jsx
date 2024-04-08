import {Container, Flex} from "@mantine/core";

const StatisticsTab = () => {
    return (
        <Container fluid className='page'>
            <Flex direction='column' gap='sm'>
                <p>Пройдено тестов: 1</p>
                <p>Пройдено лекций: 3</p>
                <p>Успешно пройдено тестов: 1</p>
            </Flex>

        </Container>
    );
};

export default StatisticsTab;
