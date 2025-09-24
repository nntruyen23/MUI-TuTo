import * as React from 'react';
import { styled } from '@mui/system';
import { Button as BaseButton } from '@mui/material';

const Button = styled(BaseButton)`
    font-size: 14px;
    
    &.btn-sign-in  {
        background-color: #50cc8c;
    }
`;


export default Button;