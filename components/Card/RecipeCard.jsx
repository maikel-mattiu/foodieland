"use client"

import styled from "styled-components"
import { BadgeWrapper, IconWrapper, TextBlock, UserBadge } from "../Badges/Badges"
import { ClockIcon, CutleryIcon } from "../Icons/Icons"

export const RecipeCard = () => {
	return (
		<FlexWrapper>
			<FlexItem>
				<UserBadge
					title={"Maikel"}
					subtitle={"15th June, 2024"}
				/>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<ClockIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<h2 style={{ fontSize: "12px", fontWeight: "bold" }}>
							PREP TIME
						</h2>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							15 Minutes
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<ClockIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<h2 style={{ fontSize: "12px", fontWeight: "bold" }}>
							COOK TIME
						</h2>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							15 Minutes
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
			<FlexItem>
				<BadgeWrapper>
					<IconWrapper>
						<CutleryIcon
							width={24}
							height={24}
						/>
					</IconWrapper>
					<TextBlock>
						<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
							Chicken
						</p>
					</TextBlock>
				</BadgeWrapper>
			</FlexItem>
		</FlexWrapper>
	)
}

const FlexWrapper = styled.div`
	display: flex;
	width: 1024px;
	height: 60px;

	> *:not(:last-child) {
		border-right: 1px solid #ccc;
	}

	> :nth-child(2),
	> :nth-child(3),
	> :nth-child(4) {
		justify-content: center;
	}
`
const FlexItem = styled.div`
	flex: 1;
	display: flex;
`
