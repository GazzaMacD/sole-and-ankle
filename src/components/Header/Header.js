import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Logo />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Invisible />
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
    padding: 0 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    max-width: 700px;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 48px;
    align-items: center;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;
const Invisible = styled.div`
    width: 140px;
    margin-left: 48px;
`;

export default Header;
