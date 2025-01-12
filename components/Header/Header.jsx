"use client"
import Link from "next/link"
import styled from "styled-components"
import { Facebook, Twitter, Instagram } from "react-feather"

const Header = ({ links }) => {
	return (
		<HeaderWrapper>
			<NavWrapper>
				<LogoWrapper>
					<Logo>
						Foodieland<Dot>.</Dot>
					</Logo>
				</LogoWrapper>
				<LinkWrapper>
					<NavList>
						{links.map((link, index) => (
							<NavItem key={index}>
								<NavLink href={link.path}>{link.name}</NavLink>
							</NavItem>
						))}
					</NavList>
				</LinkWrapper>
				<IconWrapper>
					<IconLink href={"/facebook.com"}>
						<Icon>
							<Facebook />
						</Icon>
					</IconLink>
					<IconLink href={"/instagram.com"}>
						<Icon>
							<Instagram />
						</Icon>
					</IconLink>
					<IconLink href={"/x.com"}>
						<Icon>
							<Twitter />
						</Icon>
					</IconLink>
				</IconWrapper>
			</NavWrapper>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.div`
	position: sticky;
	z-index: 100;
	top: 0;
	width: 100%;
	padding: 20px 80px;
	border-bottom: 1px solid grey;
	backdrop-filter: blur(20px);
`

const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const LogoWrapper = styled.div`
	flex: 1;
`
const Logo = styled.span`
	width: 110px;
	height: 30px;
	font-family: var(--lobster-font);
	font-size: 24px;
	font-weight: 400;
`

const IconWrapper = styled.div`
	
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 40px;
	display: flex;
`

const Icon = styled.div`
	transition: transform 0.2s ease-in-out;
`

const IconLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover ${Icon}{
		transform: scale(1.1);
	}
`

const LinkWrapper = styled.div`
	flex: 2;
`
const NavList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;
`
const NavLink = styled(Link)`
	display: block;
	color: #000000;
	text-decoration: none;
	font-size: 16px;
	font-weight: 400;
	transition: all 0.3s ease;
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
`

const NavItem = styled.li`
	margin-left: 40px;

	&:hover ${NavLink} {
		transform: translateY(-2px);
		font-weight: 600;
	}
`

const Dot = styled.span`
	font-size: 24px;
	color: #f2c94c;
	
`

export default Header
