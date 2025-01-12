"use client"

import styled from "styled-components"
import { Button } from "../Button/Button"
import { PlayCircle } from "react-feather"
import { Badge, BadgeWrapper, UserBadge } from "../Badges/Badges"
import { CutleryIcon, ClockIcon } from "../Icons/Icons"

export const MainHero = () => {
	return (
		<MainHeroSection>
			<LeftDecor />
			<MainHeroWrapper>
				<MainHeroTextWrapper>
					<MainHeroTitle>Spicy delicious chicken wings</MainHeroTitle>
					<MainSubText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor.{" "}
					</MainSubText>
					<BadgeWrapper>
						<Badge>
							<ClockIcon
								width={24}
								height={24}
							/>
							<span style={{ marginLeft: "10px" }}>30 minutes</span>
						</Badge>
						<Badge>
							<CutleryIcon
								width={24}
								height={24}
							/>
							<span style={{ marginLeft: "10px" }}>Chicken</span>
						</Badge>
					</BadgeWrapper>
					<MainBadgeWrapper>
						<MainBadge
							src="/images/Badge.png"
							alt="badge"
						/>
					</MainBadgeWrapper>
					<FlexWrapper>
						<UserBadge
							title={"Maikel"}
							subtitle={"15 March 2022"}
						/>
						<Button
							$backgroundColor="#000000"
							$textColor="#ffffff"
							$width="200px"
						>
							<span style={{ fontSize: "16px", marginRight: "10px" }}>
								View Recipes
							</span>
							<PlayCircle size={24} />
						</Button>
					</FlexWrapper>
				</MainHeroTextWrapper>
				<MainHeroImageWrapper>
					<MainHeroImage
						src="/images/hero-image.png"
						alt="hero"
					/>
				</MainHeroImageWrapper>
			</MainHeroWrapper>
			<RightDecor />
		</MainHeroSection>
	)
}

export const SubHero = () =>{
	return (
		<SubHeroSection>
			<SubHeroWrapper>
				<SubHeroTextWrapper>
					<SubHeroTitle>
						Everyone can be a chef in their own kitchen
					</SubHeroTitle>
					<MainSubText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor.{" "}
					</MainSubText>
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="150px"
						$margin="80px 0 0 0"
					>
						<span style={{ fontSize: "16px", marginRight: "10px" }}>
							Learn More
						</span>
					</Button>
				</SubHeroTextWrapper>
				<SubHeroImageWrapper>
					<GradientDecor />
					<SubHeroImage
						src="/images/male-chef-dressed.png"
						alt="hero"
					/>
				</SubHeroImageWrapper>
			</SubHeroWrapper>
		</SubHeroSection>
	)
}

const MainHeroSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 40px;
	gap: 40px;
`
const SubHeroSection = styled(MainHeroSection)`
	justify-content: center;
	margin-top: 133px;
`

const MainHeroWrapper = styled.div`
	display: flex;
	width: 1440px;
	min-width: 600px;
	height: clamp(320px, 50vw, 640px);
	margin: 0 16px;
`

const SubHeroWrapper = styled(MainHeroWrapper)`
	justify-content: center;
	align-items: center;
	gap: 60px;
`

const MainHeroTextWrapper = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #e7fafe;
	border-radius: 64px 0 0 64px;
	padding: 50px;
	gap: 24px;
`

const SubHeroTextWrapper = styled(MainHeroTextWrapper)`
	background-color: #ffffff;
	border-radius: 0;
	padding: 0;
`

const MainHeroImageWrapper = styled.div`
	position: relative;
	flex: 0 2 660px;
	border-radius: 0 64px 64px 0;
	overflow: hidden;
`

const SubHeroImageWrapper = styled(MainHeroImageWrapper)`
	position: relative;
	flex: 1;
	height: 567px;
	border-radius: 30px;
`

const MainHeroImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: right center;
`
const SubHeroImage = styled(MainHeroImage)`
	height: 100%;
	position: absolute;
	left: -10px;
	/* z-index: 1; */
	object-fit: contain;
	object-position: center;
`

const MainHeroTitle = styled.h1`
	font-size: 84px;
	font-weight: 700;
	width: 600px;
`

const SubHeroTitle = styled(MainHeroTitle)`
	font-size: 64px;
`

const MainSubText = styled.p`
	font-size: 16px;
	width: 50ch;
	line-height: 28px;
	color: rgba(0, 0, 0, 0.6);
`

const MainBadgeWrapper = styled.div`
	position: absolute;
	top: 50px;
	right: -50px;
	bottom: 440px;
	z-index: 1;
`

const MainBadge = styled.img`
	width: 150px;
	height: 150px;
	object-fit: contain;
`

const LeftDecor = styled.div`
	flex-basis: 80px;
	height: clamp(300px, 50vw, 600px);
	background-color: #e7fafe;
	border-radius: 0 32px 32px 0;
`
const RightDecor = styled.div`
	flex-basis: 80px;
	height: clamp(300px, 50vw, 600px);
	background-color: #e7fafe;
	border-radius: 32px 0 0 32px;
`

const GradientDecor = styled.div`
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	position: absolute;
	width: 651px;
	height: 500px;
	top: 68px;
	right: -35px;
	z-index: -2;
	border-radius: 30px;
`
const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
`
