import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"

export const FormContainer = styled.div`
    width: 250px;
    margin: 150px auto 0px;
    border: 1px solid ${SOLID.GREY};
    border-radius: 5px;
    text-align: center;
`;

export const Form = styled.form`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

export const H3 = styled.h3`
    color: white;
    background-color: ${SOLID.GREY};
    width: 100%;
    padding: 10px 0px;
    position: relative;
    bottom: 20px;
    border-radius: 5px 5px 0px 0px;
`;

export const Input = styled.input`
    margin: 10px auto;
`;

export const SubBtn = styled.input`
    margin: 10px auto;
    color: white;
    background-color: ${SOLID.GREY};
    padding: 5px 10px;
    border-radius: 5px;
    width: 50px;
    text-align: center;
    font-weight: 600;
`;