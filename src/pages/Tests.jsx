import {Button, Center, Container, Flex, Title} from "@mantine/core";
import './Tests.scss'
import {useState} from "react";

const Tests = () => {
    const [activeQuestion, setActiveQuestion] = useState(1);
    const [testState, setTestState] = useState([
        {number: 1, answer: null},
        {number: 2, answer: null},
        {number: 3, answer: null},
        {number: 4, answer: null},
        {number: 5, answer: null},
    ])

    const setAnswer = () => {
        setTestState(prevState => {
            const copy = [...prevState]
            const question = prevState.find(question => question.number === activeQuestion)
            if(question){
                question.answer = 1
            }
            return copy
        })
    }

    return (
        <Container fluid className='tests page'>
            <Title align='center' order={1}>Тесты</Title>
            <Flex
                gap='xs'
                p='md'
                mt='md'
                className='tests-numbers'
            >
                {testState.map(({number}) => <div
                    className={[
                        'tests-number',
                        activeQuestion === number ? 'active' : ''
                    ].join(' ')}
                    onClick={() => setActiveQuestion(number)}
                    key={number}
                >
                    {number}
                </div>)}
            </Flex>
            <Title mt='md' align='center' order={3}>{activeQuestion}</Title>
            <Center>
                {activeQuestion < 5 ?
                    <Button size='md' mt='xl' onClick={() => {
                        setAnswer()
                        setActiveQuestion(prevState => prevState + 1)
                    }}>
                        Ответить
                    </Button> :
                    <Button size='md' mt='xl' onClick={() => {
                        setAnswer()
                    }}>Завершить</Button>
                }
            </Center>
        </Container>
    );
};

export default Tests;
