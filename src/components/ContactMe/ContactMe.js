import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ContactForm, Left, Right, TextWarn } from './ContactMeStyles';


const ContactMe = () => {

    async function handleSendEmail() {
        
    }

    return(    
    <Section>
        <SectionDivider />
        <SectionTitle style={{paddingTop: "1rem"}}>Entre em contato</SectionTitle>
        <ContactForm onSubmit={handleSendEmail} >
            <Left>
                <input type="text" placeholder="Nome" size="40" />
                <input type="email" placeholder="E-mail" size="40" />
                <textarea placeholder="Conteúdo" cols="40" rows="7" ></textarea>
            </Left>
            <Right>
                <button type="submit">Vamos trabalhar juntos!</button>
                <TextWarn>Não está funcionando? <br />Tente mandar diretamente para <br /> <br /> <a href="mailto:luizfelipesantospereira01@gmail.com">luizfelipesantospereira01@gmail.com</a></TextWarn>
            </Right>
        </ContactForm>
    </Section>)
}


export default ContactMe;
