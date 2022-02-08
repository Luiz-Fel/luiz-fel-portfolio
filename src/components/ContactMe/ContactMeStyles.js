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
        border: 1px solid #ffffffa8;
        font-family: 'Droid Serif', serif;
        color: white;
        padding:0.6rem;
        transition: border 0.3s;
        &:focus {
            border: 1px solid white;
        }
    }
    textarea {
        padding: 0.5rem;
        background-color: transparent;
        resize: none;
        margin: 1rem 0;
        overflow: auto;
        border: 1px solid #ffffffa8;
        color: white;
        transition: border 0.3s;
        &:focus {
            border: 1px solid white;
        }
    }
`

export const Right = styled.div`
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    button {
        font-size: 1.8rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        transition: background-color 0.2s;
        &:hover {{
            background-color: black;
        }}
    }
`
export const TextWarn = styled.p`
    text-align: center;
    font-size: 1.7rem;
    background-color:
`