import { styled } from "styled-components";


const FooterContainer = styled.footer`
    height: 40px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    background: #fafafa;
    margin-top: auto; 
`;

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <FooterContainer>
                <span>© {year} Научная статья</span>
                <span>Все права защищены.</span>
            </FooterContainer>
        </>
    );
}
