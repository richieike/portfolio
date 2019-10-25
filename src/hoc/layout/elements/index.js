
import styled from 'styled-components';

//import formik here to add custom css 
import {Form} from 'formik';

export const Container = styled.div`

    width:100%;
    max-width: 140rem;
    margin: 0 auto;
    height: 100%;
`;

export const FormWrapper = styled.div`
margin: 0 auto;
width: 100%;
max-width: 50rem;
border-radius: 1rem;
background-color: var(--color-mainDark);
box-shadow: 0rem .5rem 3.5rem var(--shadow);
padding: 5rem 8rem;
display: flex;
flex-direction: column;
align-items: center;
`;

export const StyledForm = styled(Form)`
position: relative;
align-items: center;
display:flex;
width: 100%;
flex-direction: column;


`;