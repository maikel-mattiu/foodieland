"use client"

import Link from "next/link"
import styled from "styled-components"
import { FOOTER_ROUTES } from "@/data"
import { Twitter } from "react-feather"
import { Instagram } from "react-feather"
import { Facebook } from "react-feather"

export const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<FooterWrapper>
			<ContentWrapper>
				<LogoWrapper>
					<Logo>Foodieland</Logo>
					<p
						style={{
							minWidth: "500px",
							maxWidth: "600px",
							lineHeight: "28px",
							color: "grey"
							// textAlign: "center"
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</LogoWrapper>
				<LinkWrapper>
					<NavList>
						{FOOTER_ROUTES.map((route, index) => (
							<NavItem key={index}>
								<NavLink href={route.path}>{route.name}</NavLink>
							</NavItem>
						))}
					</NavList>
				</LinkWrapper>
			</ContentWrapper>
			<FooterBottom>
				<TextWrapper>
					<p style={{ marginLeft: "200px", color: "grey" }}>
						&copy;{currentYear} Flowbase. Powered by{" "}
						<span style={{ color: "#FF7967" }}>Vercel</span>
					</p>
				</TextWrapper>
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
			</FooterBottom>
		</FooterWrapper>
	)
}

const FooterWrapper = styled.div`
	position: sticky;
	z-index: 100;
	top: 0;
	width: 100%;
	padding: 20px 80px;
	border-bottom: 1px solid grey;
	backdrop-filter: blur(20px);
`

const ContentWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 48px;
	border-bottom: 1px solid grey;
`

const FooterBottom = styled.div`
	font-family: var(--eudoxus-font);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 48px 0;
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
	margin-bottom: 16px;
`

const LinkWrapper = styled.div`
	flex: 2;
`
const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
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
const IconWrapper = styled.div`
	/* flex: 1; */
	display: flex;
	justify-content: space-between;
	gap: 40px;
	/* justify-self: flex-end; */
`

const Icon = styled.div`
	transition: transform 0.2s ease-in-out;
`

const IconLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:hover ${Icon} {
		transform: scale(1.1);
	}
`

const TextWrapper = styled.div`
	flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
