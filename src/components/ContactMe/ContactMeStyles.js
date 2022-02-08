import styled from "styled-components"

export const ContactForm = styled.div`
    border-radius: 5px;
    padding: 0.5rem;
    background-color: #212D45;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 5rem;
`

export const Left = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        margin: 1rem 0;
        font-size: 1.8rem;   
        background-color: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid #ffffffa8;
        font-family: 'Droid Serif', serif;
        color: white;
        padding:0.6rem;
        transition: border 0.3s;
        &:focus {
            border: 1px solid white;
        }
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #ffffffa8;
        }
        :-ms-input-placeholder {
            color: #ffffffa8;
        }
    }
    textarea {
        padding: 0.8rem;
        background-color: transparent;
        resize: none;
        margin: 2rem 0;
        overflow: auto;
        border: 1px solid #ffffffa8;
        color: white;
        transition: border 0.3s;
        border-radius: 1px;
        &:focus {
            border: 1px solid white;
        }
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #ffffffa8;
        }
        :-ms-input-placeholder {
            color: #ffffffa8;
        }

    }
`

export const Right = styled.div`
    padding: 3.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    button {
        font-size: 1.8rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        transition: background-color 0.2s;
        &:hover {{
            background-color: #dcdcdcc2;
        }}
    }
`
export const TextWarn = styled.p`
    padding: 0.8rem;
    text-align: center;
    font-size: 1.7rem;
    border: 2px solid white;
    border-radius: 1px;
    a {
        text-decoration: none;
        color:  #dcdcdcc2;
        &:hover {
            color: white;
        }
    }
`