"use client"

import { Heart } from "react-feather"
import styled from "styled-components"
import { Badge, BadgeWrapper } from "../Badges/Badges"
import { CutleryIcon, ClockIcon } from "../Icons/Icons"

const Card = ({ src, title, fill, isAd, background, tag }) => {
	return (
		<CardWrapper
			$isAd={isAd}
			$background={background}
		>
			<CardImageWrapper $isAd={isAd}>
				<CardImage
					src={src}
					alt={title}
				/>
			</CardImageWrapper>
			{!isAd && (
				<>
					<CardTitle>{title}</CardTitle>
					<BadgeWrapper>
						<Badge>
							<ClockIcon
								width={24}
								height={24}
							/>
							<span
								style={{
									marginLeft: "10px",
									color: `rgba(0, 0, 0, 0.6)`
								}}
							>
								30 minutes
							</span>
						</Badge>
						<Badge>
							<CutleryIcon
								width={24}
								height={24}
							/>
							<span
								style={{
									marginLeft: "10px",
									color: `rgba(0, 0, 0, 0.6)`
								}}
							>
								{tag}
							</span>
						</Badge>
					</BadgeWrapper>
					<IconWrapper>
						<Heart
							size={24}
							fill={fill}
							stroke="none"
						/>
					</IconWrapper>
				</>
			)}
		</CardWrapper>
	)
}

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	position: relative;
	background: ${(props) =>
		props.$background
			? "#ffffff"
			: `linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%)`};
	border-radius: 30px;
	padding: ${(props) => (props.$isAd ? "0" : "16px")};
	width: 400px;
	height: 434px;
`

const CardImageWrapper = styled.div`
	width: ${(props) => (props.$isAd ? "100%" : "368px")};
	height: ${(props) => (props.$isAd ? "100%" : "250px")};
	border-radius: ${(props) => (props.$isAd ? "0" : "16px")};
	overflow: hidden;
`

const CardImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

const CardTitle = styled.h3`
	text-align: left;
	font-size: 18px;
	width: 24ch;
`

const IconWrapper = styled.div`
	position: absolute;
	background-color: white;
	width: 48px;
	height: 48px;
	right: 36px;
	top: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`

export default Card
