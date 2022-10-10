import styled from 'styled-components'


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    font-family:  "Poppins";
    padding: 0 20px;
    z-index: 99;
    width: 100%;
    height: 56px;
    background-color: var(--navback);

    ul{
        display: flex;
        list-style-type: none;
        margin: 15px 0;
        transition: 0.4s;
        li{
        margin-left: 20px;
        }
    }

    .TitleLink{
        font-weight: 600;
        font-size: 20px;
        margin: 15px 0;
        color: var(--navtext);
    }

    a{
        position: relative;
        text-decoration: none;
        font-weight: 300;
        font-size: 18px;
        color: #f3effe;
    }

    li{
        a:after{
            content: "";
            position: absolute;
            background-color: var(--linkhov);
            height: 3px;
            width: 0;
            left: 0;
            bottom: -10px;
            transition: 0.4s;
        }

        a:hover:after{
            width: 100%;
        }
    }

    .HamBurg{
        /* position: relative; */
        /* z-index: 1; */
        /* appearance: none; */
        display: none;
        user-select: none;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;

        span{
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            background-color: var(--span);
            border-radius: 6px;
            transition: 0.4s;
            transform-origin: 3.5px;
        }

        &:hover span:nth-child(2){
            transform: ${({open}) => !open? 'translateX(10px)' : ''};
            background-color: var(--linkhov);
        }

        span:nth-child(1){
            transform: ${({open}) => open? 'rotate(45deg)' : 'rotate(0)'};
        }
        span:nth-child(2){
            transform: ${({open}) => open? 'translateX(20px)' : 'translateX(0)'};
            opacity: ${({open}) => open? '0' : '1'};
        }
        span:nth-child(3){
            transform: ${({open}) => open? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    


    @media (max-width: 768px) {
        /* ul{
            display: none;
        } */

        .HamBurg{
            display: block;
        }
    }

    @media (max-width: 768px) {
        ul{
            /* display: none; */
            transform: ${({open}) => open? 'translateX(0px)' : 'translateX(100%)'};
            flex-flow: column nowrap;
            background-color: var(--sidebar);
            position: fixed;
            top: 41px;
            right: 0;
            height: 100vh;
            width: 35%;
        }
        li{
            margin: 7px 0;
        }
    }

    .material-symbols-outlined{
        color: var(--navtext);
    }
`;

export { Nav };