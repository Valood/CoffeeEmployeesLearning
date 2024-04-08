import {Container, Tabs, Title} from "@mantine/core";
import ProfileTab from "../components/ProfileTab.jsx";
import StatisticsTab from "../components/StatisticsTab.jsx";

const Profile = () => {

    return (
        <Container fluid className='page'>
            <Title align='center' order={1}>Мой профиль</Title>
            <Tabs defaultValue='profile'>
                <Tabs.List>
                    <Tabs.Tab value="profile">
                        Профиль
                    </Tabs.Tab>
                    <Tabs.Tab value="statistics">
                        Статистика
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='profile'>
                    <ProfileTab/>
                </Tabs.Panel>
                <Tabs.Panel value='statistics'>
                    <StatisticsTab/>
                </Tabs.Panel>
            </Tabs>
        </Container>
    );
};

export default Profile;
