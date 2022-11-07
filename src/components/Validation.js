import styled from 'styled-components';
import { Input } from './Input';

export const FirstNameInput = styled(Input)`
    ${(props) => {
        if (props.value) {
            if (props.value.length < 3) {
                return `border-color: red;`
            }
            if (props.value.length >= 3) {
                return `border-color: green`
            }
        }
    }}
`;

export const LastNameInput = styled(Input)`
${(props) => {
        if (props.value) {
            if (props.value.length < 3 ) {
                return `border-color: red;`
            }
            if (props.value.length >= 3 && props.value != '') {
                return `border-color: green`
            }
        }
    }}
`;

export const EmailValidation = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{2,}\.){1,2}[-A-Za-z]{2,})$/u;
export const EmailInput = styled(Input)`
    ${(props) => {
        if (props.value) {
            if (!EmailValidation.test(props.value)) {
                return `
                border-color: red;`
            }
            else return `
                border-color: green;`
        }
    }}
`
export const PasswordValidation = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}/u;
export const PasswordInput = styled(Input)`
${(props) => {
    if (props.value) {
        if (!PasswordValidation.test(props.value)) {
            return `
            border-color: red;`
        }
        else return `
            border-color: green;`
    }
}}
`