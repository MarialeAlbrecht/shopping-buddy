import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  return (
    <Nav>
      <NavItem active={router.pathname === "/"}>
        <Link href="/">Shopping List</Link>
      </NavItem>
      <NavItem active={router.pathname === "/purchaseditems"}>
        <Link href="/purchaseditems">Purchased Items</Link>
      </NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color: #097969;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 2;
  color: white;
`;

const NavItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => (props.active ? "black" : "white")};
    text-decoration: none;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    font-size: 1.5rem;
    padding: 0 1rem;
  }
`;
