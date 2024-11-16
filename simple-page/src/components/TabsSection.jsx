import Button from "./Button/Button.jsx";

export default function TabsSection({ activeTab, onChange }) {
    return (
        <section style={{ marginBottom: '1rem' }}>
            <Button isActive={activeTab === 'main'} onClick={() => onChange('main')}> Главная </Button>
            <Button isActive={activeTab === 'feedback'} onClick={() => onChange('feedback')}> Обратная связь </Button>
        </section>
    );
}
