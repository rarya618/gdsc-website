import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
display: flex;
flex-direction: row;
padding: 5px 10px;

@media only screen and (max-width: 768px) { 
    flex-flow: column wrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    list-style: none;
    display: flex;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
}
`