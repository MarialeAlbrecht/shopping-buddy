import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import list from "@/assets/list.png";
import purchased from "@/assets/purchased.png";
import vegetables from "@/assets/vegetables.png";

export default function Navbar() {
  const router = useRouter();
  return (
    <Nav>
      <NavItem>
        <Link href="/">
          <Image src={list} alt="Shopping List" width={45} height={45} />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/purchaseditems">
          <Image src={purchased} alt="Purchased List" width={45} height={45} />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/savedrecipes">
          <Image src={vegetables} alt="Recipes page" width={58} height={58} />
        </Link>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color: #1e1d6d;
  font-family: Helvetica, Arial, sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.4rem 0;
  z-index: 2;
  color: white;
`;

const NavItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1.5px solid white;
  }
`;
