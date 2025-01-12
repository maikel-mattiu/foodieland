"use client"

import styled from "styled-components"
import { MainHero, SubHero } from "@/components/Hero/Hero"
import Categories from "@/components/Categories/Categories"
import {
	CheckOutGrid,
	MoreRecipesGrid,
	RecipeGrid,
	SectionGrid
} from "@/components/SectionGrid/SectionGrid"
import { INFO } from "@/constants"
import { Button } from "@/components/Button/Button"
import { Instagram } from "react-feather"

export default function Home() {
	return (
		<div>
			<main>
				<MainHero />
				{/* Catergories section */}
				<Categories info={INFO} />
				<RecipeSection>
					<h2 style={{ fontSize: "48px" }}>Simple and tasty recipes</h2>
					<p
						style={{
							minWidth: "500px",
							maxWidth: "800px",
							margin: "24px auto",
							lineHeight: "28px",
							color: `rgba(0, 0, 0, 0.6)`
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						auctor, sapien vel tincidunt bibendum, velit turpis tincidunt
						velit, ut tincidunt enim velit vel velit.{" "}
					</p>
					<RecipeGrid />
				</RecipeSection>
				<SubHero />
				<InstPostSection>
					<h2 style={{ fontSize: "48px" }}>
						Check out @foodieland on Instagram
					</h2>
					<p
						style={{
							minWidth: "500px",
							maxWidth: "800px",
							margin: "24px auto",
							lineHeight: "28px",
							color: `rgba(0, 0, 0, 0.6)`
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						auctor, sapien vel tincidunt bibendum, velit turpis tincidunt
						velit, ut tincidunt enim velit vel velit.{" "}
					</p>
					<CheckOutGrid />
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="230px"
						$margin="80px 0 0 0"
					>
						<span style={{ fontSize: "16px", marginRight: "10px" }}>
							Visit Our Instagram
						</span>
						<Instagram />
					</Button>
				</InstPostSection>
				<MoreRecipeSection>
					<TextWrapper>
						<h2 style={{ fontSize: "48px", flex: `0 2 600px` }}>
							Try this delicious recipe to make your day
						</h2>
						<p
							style={{
								minWidth: "500px",
								maxWidth: "800px",
								lineHeight: "28px",
								flex: 1,
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							auctor, sapien vel tincidunt bibendum, velit turpis tincidunt
							velit, ut tincidunt enim velit vel velit.{" "}
						</p>
					</TextWrapper>
					<MoreRecipesGrid number={8} />
				</MoreRecipeSection>
				<InboxSection>
					<h2 style={{ fontSize: "48px" }}>Deliciousness to your inbox</h2>
					<p
						style={{
							minWidth: "500px",
							maxWidth: "600px",
							lineHeight: "28px",
							textAlign: "center",
							color: `rgba(0, 0, 0, 0.6)`
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						auctor, sapien vel tincidunt bibendum, velit turpis tincidunt
						velit.{" "}
					</p>
					<EmailBoxWrapper>
						<EmailBox
							type="email"
							placeholder="Your email address..."
						/>
						<Button
							$backgroundColor="#000000"
							$textColor="#ffffff"
							$width="160px"
						>
							Subscribe
						</Button>
					</EmailBoxWrapper>
					<InboxImageOneWrapper>
						<InboxImage src="/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png" />
					</InboxImageOneWrapper>
					<InboxImageTwoWrapper>
						<InboxImage src="/images/Photo-plate.png" />
					</InboxImageTwoWrapper>
				</InboxSection>
			</main>
		</div>
	)
}

const RecipeSection = styled.section`
	margin: 190px 120px;
	text-align: center;
`

const InstPostSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 190px 0;
	text-align: center;
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
	width: 100%;
	padding-bottom: 150px;
`

const MoreRecipeSection = styled.section`
	margin: 160px 80px;
`

const TextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 16px;
`

export const InboxSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 160px 80px;
	background: #e7f9fd;
	height: 500px;
	border-radius: 60px;
	position: relative;
	overflow: hidden;
`
export const EmailBoxWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: #ffffff;
	border-radius: 20px;
	padding: 8px;
	width: 500px;
	margin-top: 65px;
`

export const InboxImageOneWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
`
export const InboxImageTwoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
`

export const InboxImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const EmailBox = styled.input`
	flex: 1;
	border: none;
	padding: 16px;
	border-radius: 20px;
`
