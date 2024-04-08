import {Button, Center, Radio, Container, Flex, Title, Loader, Modal} from "@mantine/core";
import './Tests.scss'
import {useEffect, useMemo, useState} from "react";
import {useGetTestQuery, useSendTestMutation} from "../store/api.js";
import {notifications} from "@mantine/notifications";
import {useNavigate} from "react-router-dom";

const Tests = () => {
    const {data: test, isLoading} = useGetTestQuery()
    const [sendTest, {data: testResult}] = useSendTestMutation()
    const navigate = useNavigate()

    const [activeQuestionId, setActiveQuestionId] = useState(1);
    const [testState, setTestState] = useState([])
    const [currentAnswerChecked, setCurrentAnswerChecked] = useState(null)

    const activeQuestion = useMemo(() => {
        if(test) return test.questions.find(question => question.id === activeQuestionId);
        return null
    }, [test, activeQuestionId])

    useEffect(() => {
        if(testState.length === test?.questions?.length){
            sendTest({answers: testState})
        }
    }, [testState, test])

    useEffect(() => {
        if(testResult){
            setTestState([])
            setActiveQuestionId(1)
            notifications.show({
                title: testResult.passed ? 'Успешно' : 'Провалено',
                message: testResult.passed ? `Ваша новая должность "${testResult.new_role}"` : 'Тест не пройден. Попробуйте ещё раз!'
            })
            if(testResult.passed){
                navigate('/')
            }
        }
    }, [testResult])

    if(isLoading){
        return <Loader size='xl' mt='xl' ml='xl'/>
    }
    return (
        <Container fluid className='tests page'>
            <Title align='center' order={1}>Тесты</Title>
            <Flex
                gap='xs'
                p='md'
                mt='md'
                className='tests-numbers'
                wrap='wrap'
            >
                {test.questions.map(({id}) => <div
                    className={[
                        'tests-number',
                        activeQuestionId === id ? 'active' : ''
                    ].join(' ')}
                    onClick={() => setActiveQuestionId(id)}
                    key={id}
                >
                    {id}
                </div>)}
            </Flex>
            <Title mt='md' align='center' order={3}>{activeQuestion.question}</Title>
            {activeQuestion?.variants && <Flex direction='column' gap='sm'>
                    {activeQuestion.variants.map((variant) => <Radio
                        key={variant.id}
                        label={variant.answer}
                        checked={variant.id === currentAnswerChecked}
                        onChange={() => setCurrentAnswerChecked(variant.id)}
                    />)}
                </Flex>}
            <Center>
                {activeQuestionId < test.questions.length ?
                    <Button size='md' mt='xl' onClick={() => {
                        setTestState(prevState => [...prevState, currentAnswerChecked])
                        setActiveQuestionId(prevState => prevState + 1)
                    }}>
                        Ответить
                    </Button> :
                    <Button size='md' mt='xl' onClick={() => {
                        setTestState(prevState => [...prevState, currentAnswerChecked])
                    }}>Завершить</Button>
                }
            </Center>
        </Container>
    );
};

export default Tests;
