import Header from "./components/Header.jsx";
import Footer from './components/Footer';
import TeachingSection from "./components/TeachingSection.jsx";
import Dif from "./components/Dif.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    padding: 20px;  
    margin-bottom: 50px;
`;

export function App() {
    const [tab, setTab] = useState('feedback');

    return (
        <>
            <div>
                <Header />
                <MainContainer>
                    <IntroSection />
                    <TabsSection activeTab={tab} onChange={(current) => setTab(current)} />

                    {tab === 'main' && (
                        <>
                            <TeachingSection />
                            <Dif />
                        </>
                    )}

                    {tab === 'feedback' && (
                        <FeedbackSection />
                    )}
                </MainContainer>
                <Footer />
            </div>
        </>
    );
}

export default App;
