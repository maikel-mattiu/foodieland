"use client"

import { ImageBadge } from "@/components/Badges/Badges"
import { RecipeCard } from "@/components/Card/RecipeCard"
import { PrintIcon, ShareIcon } from "@/components/Icons/Icons"
import { NUTRITION_INFO } from "@/data"
import styled from "styled-components"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"
import { Button } from "@/components/Button/Button"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"

function Recipes() {
	return (
		<>
			<RecipePage>
				<MainSection>
					<MainArea>
						<Title>Health Japanese Fried Rice</Title>
						<RecipeCard />
						<VideoWrapper>
							<Thumbnail src="/images/video-image.png" />
						</VideoWrapper>
					</MainArea>
					<InfoArea>
						<FlexWrapper>
							<FlexItemWrapper>
								<IconWrapper>
									<PrintIcon
										width={24}
										height={24}
									/>
								</IconWrapper>
								<p>PRINT</p>
							</FlexItemWrapper>
							<FlexItemWrapper>
								<IconWrapper>
									<ShareIcon
										width={24}
										height={24}
									/>
								</IconWrapper>
								<p>SHARE</p>
							</FlexItemWrapper>
						</FlexWrapper>
						<InfoBox>
							<h2
								style={{
									marginBottom: "24px",
									fontSize: "32px",
									fontWeight: "bold"
								}}
							>
								Nutrition Information
							</h2>
							{NUTRITION_INFO.map(({ nutrient, unit }) => (
								<FactBox key={nutrient}>
									<span
										style={{
											color: `rgba(0, 0, 0, 0.6)`,
											fontSize: "18px"
										}}
									>
										{nutrient}
									</span>
									<span style={{ fontSize: "18px" }}>{unit}</span>
								</FactBox>
							))}
							<p
								style={{
									marginTop: "90px",
									textAlign: "center",
									color: `rgba(0, 0, 0, 0.6)`
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed euismod, metus vel tincidunt malesuada, velit turpis
								malesuada
							</p>
						</InfoBox>
					</InfoArea>
				</MainSection>
				<p
					style={{
						marginTop: "80px",
						textAlign: "justify",
						lineHeight: "30px",
						color: `rgba(0, 0, 0, 0.6)`
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
					metus vel tincidunt malesuada, velit turpis malesuada. Sed euismod,
					metus vel tincidunt Esse consectetur officia sit do nisi pariatur.
					Reprehenderit aliquip qui cillum officia commodo occaecat elit.
					Laboris labore commodo sunt enim elit sit sit irure deserunt eiusmod
					velit exercitation Lorem nostrud. Irure aliquip ea ullamco laborum
					eiusmod adipisicing laborum et veniam cillum dolor non occaecat. Ipsum
					veniam consectetur esse reprehenderit. Et duis ut incididunt eiusmod.
				</p>
				<IngredientsSection>
					<IngredientsMainBox>
						<h2
							style={{
								marginBottom: "48px",
								fontSize: "32px",
								fontWeight: "bold"
							}}
						>
							Ingredients
						</h2>
						<h3>For main dish</h3>
						{Array(5)
							.fill(null)
							.map((_, index) => (
								<CheckboxLabel key={index}>
									<Input
										type="checkbox"
										value={`toasty-${index}`} // Ensure unique values
										name={`machine-${index}`} // Ensure unique names
									/>{" "}
									<span>
										Occaecat ut tempor consequat consectetur anim
										proident eu ad sunt occaecat labore voluptate
										veniam.
									</span>{" "}
									{/* Label for each checkbox */}
								</CheckboxLabel>
							))}
						<h3 style={{ marginTop: "64px" }}>For the sauce</h3>
						{Array(3)
							.fill(null)
							.map((_, index) => (
								<CheckboxLabel key={index}>
									<Input
										type="checkbox"
										value={`toasty-${index}`} // Ensure unique values
										name={`machine-${index}`} // Ensure unique names
									/>{" "}
									<span>
										Occaecat ut tempor consequat consectetur anim
										proident eu ad sunt occaecat labore voluptate
										veniam.
									</span>{" "}
									{/* Label for each checkbox */}
								</CheckboxLabel>
							))}
					</IngredientsMainBox>
					<IngredientsSideBox>
						<ImageBadge
							image="/images/chicken-meatballs-1.png"
							alt="image-badge"
							title="Chicken Meatball with Creamy Chees..."
							subtitle="By Andreas Paula"
							width={"180px"}
						/>
						<ImageBadge
							image="/images/creamy-chicken.png"
							alt="image-badge"
							title="The Creamiest Creamy Chicken an..."
							subtitle="By Andreas Paula"
							width={"180px"}
						/>
						<ImageBadge
							image="/images/pot-chicken-1.png"
							alt="image-badge"
							title="The Best Easy One Pot Chicken and Rice"
							subtitle="By Andreas Paula"
							width={"180px"}
						/>
						<AdWrapper>
							<Ad
								src="/images/ad-banner.png"
								alt="ad"
							/>
						</AdWrapper>
					</IngredientsSideBox>
				</IngredientsSection>
				<DirectionsSection>
					<h2
						style={{
							marginTop: "88px",
							fontSize: "32px",
							fontWeight: "bold"
						}}
					>
						Directions
					</h2>
					<div
						style={{ borderBottom: "1px solid #ccc", paddingBottom: "48px" }}
					>
						<CheckboxLabel
							$flexDirection={"column"}
							$alignItems={"flex-start"}
							$borderBottom={"none"}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px"
								}}
							>
								<Input
									type="checkbox"
									value={`toasty`} // Ensure unique values
									name={`machine`} // Ensure unique names
								/>{" "}
								<h3>1. Lorem ipsum dolor sit ame</h3>{" "}
								{/* Label for each checkbox */}
							</div>
							<div
								style={{
									textAlign: "justify",
									marginLeft: "34px",
									lineHeight: "30px",
									letterSpacing: "-0.02em",
									color: `rgba(0, 0, 0, 0.6)`
									// marginBottom: "48px"
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed euismod, metus vel tincidunt malesuada, velit turpis
								malesuada. Sed euismod, metus vel tincidunt Esse
								consectetur officia sit do nisi pariatur. Reprehenderit
								aliquip qui cillum officia commodo occaecat elit. Laboris
								labore commodo sunt enim elit sit sit irure deserunt
								eiusmod velit exercitation Lorem nostrud. Irure aliquip ea
								ullamco laborum eiusmod adipisicing laborum et veniam
								cillum dolor non occaecat. Ipsum veniam consectetur esse
								reprehenderit. Et duis ut incididunt eiusmod.
							</div>
						</CheckboxLabel>
						<ImageWrapper>
							<Thumbnail src="/images/woman-in-kitchen.png" />
						</ImageWrapper>
						<div
							style={{
								textAlign: "justify",
								marginLeft: "34px",
								lineHeight: "30px",
								letterSpacing: "-0.02em",
								color: `rgba(0, 0, 0, 0.6)`
								// marginBottom: "48px"
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							euismod, metus vel tincidunt malesuada, velit turpis
							malesuada. Sed euismod, metus vel tincidunt Esse consectetur
							officia sit do nisi pariatur. Reprehenderit aliquip qui cillum
							officia commodo occaecat elit. Laboris labore commodo sunt
							enim elit sit sit irure deserunt eiusmod velit exercitation
							Lorem nostrud. Irure aliquip ea ullamco laborum eiusmod
							adipisicing laborum et veniam cillum dolor non occaecat. Ipsum
							veniam consectetur esse reprehenderit. Et duis ut incididunt
							eiusmod.
						</div>
					</div>
					<div
						style={{ borderBottom: "1px solid #ccc", paddingBottom: "48px" }}
					>
						<CheckboxLabel
							$flexDirection={"column"}
							$alignItems={"flex-start"}
							$borderBottom={"none"}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px"
								}}
							>
								<Input
									type="checkbox"
									value={`toasty`} // Ensure unique values
									name={`machine`} // Ensure unique names
								/>{" "}
								<h3>2. Lorem ipsum dolor sit ame</h3>{" "}
								{/* Label for each checkbox */}
							</div>
							<div
								style={{
									textAlign: "justify",
									marginLeft: "34px",
									lineHeight: "30px",
									letterSpacing: "-0.02em",
									color: `rgba(0, 0, 0, 0.6)`
									// marginBottom: "48px"
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed euismod, metus vel tincidunt malesuada, velit turpis
								malesuada. Sed euismod, metus vel tincidunt Esse
								consectetur officia sit do nisi pariatur. Reprehenderit
								aliquip qui cillum officia commodo occaecat elit. Laboris
								labore commodo sunt enim elit sit sit irure deserunt
								eiusmod velit exercitation Lorem nostrud. Irure aliquip ea
								ullamco laborum eiusmod adipisicing laborum et veniam
								cillum dolor non occaecat. Ipsum veniam consectetur esse
								reprehenderit. Et duis ut incididunt eiusmod.
							</div>
						</CheckboxLabel>
					</div>
					<div
						style={{ borderBottom: "1px solid #ccc", paddingBottom: "48px" }}
					>
						<CheckboxLabel
							$flexDirection={"column"}
							$alignItems={"flex-start"}
							$borderBottom={"none"}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px"
								}}
							>
								<Input
									type="checkbox"
									value={`toasty`} // Ensure unique values
									name={`machine`} // Ensure unique names
								/>{" "}
								<h3>3. Lorem ipsum dolor sit ame</h3>{" "}
								{/* Label for each checkbox */}
							</div>
							<div
								style={{
									textAlign: "justify",
									marginLeft: "34px",
									lineHeight: "30px",
									letterSpacing: "-0.02em",
									color: `rgba(0, 0, 0, 0.6)`
									// marginBottom: "48px"
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Sed euismod, metus vel tincidunt malesuada, velit turpis
								malesuada. Sed euismod, metus vel tincidunt Esse
								consectetur officia sit do nisi pariatur. Reprehenderit
								aliquip qui cillum officia commodo occaecat elit. Laboris
								labore commodo sunt enim elit sit sit irure deserunt
								eiusmod velit exercitation Lorem nostrud. Irure aliquip ea
								ullamco laborum eiusmod adipisicing laborum et veniam
								cillum dolor non occaecat. Ipsum veniam consectetur esse
								reprehenderit. Et duis ut incididunt eiusmod.
							</div>
						</CheckboxLabel>
					</div>
				</DirectionsSection>
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
				<h2
					style={{
						marginBottom: "48px",
						fontSize: "32px",
						fontWeight: "bold",
						textAlign: "center"
					}}
				>
					You may like these recipe too
				</h2>
				<MoreRecipesGrid number={4} />
			</RecipePage>
		</>
	)
}

const RecipePage = styled.div`
	margin: 0 80px;
`

export const MainSection = styled.section`
	display: flex;
	margin-top: 80px;
	gap: 40px;
`
export const MainArea = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 50px;
`
const FlexWrapper = styled.div`
	display: flex;
	height: 200px;
	gap: 32px;
	justify-content: flex-end;
`

const FlexItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`

export const InfoArea = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 24px;
`
const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 32px;
	background-color: #e7fafe;
	border-radius: 10px;
	width: 100%;
	height: 600px;
`
const FactBox = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: #ccc 1px solid;
	padding-bottom: 16px;
`

export const Title = styled.h1`
	font-size: 64px;
`

const VideoWrapper = styled.div`
	width: 100%;
	height: 600px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
`

const ImageWrapper = styled.div`
	width: 100%;
	height: 600px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	/* margin-left: 34px; */
	margin: 48px 0 48px 34px;
`

const Thumbnail = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`
const IngredientsSection = styled.section`
	display: flex;
	gap: 40px;
	margin-top: 80px;
`
const IngredientsMainBox = styled.div`
	flex: 2;
`
export const IngredientsSideBox = styled.div`
	flex: 1;
	/* background-color: #e7fafe; */
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	gap: 24px;
`

const DirectionsSection = styled.section`
	width: 1135px;
`

const IconWrapper = styled.div`
	width: 80px;
	height: 80px;
	background-color: #e7fafe;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Input = styled.input`
	&[type="checkbox"] {
		appearance: none; /* Remove default style */
		width: 24px; /* Adjust size */
		height: 24px; /* Adjust size */
		border-radius: 50%; /* Make it circular */
		border: 2px solid #ccc; /* Border color */
		background-color: white; /* Default background */
		cursor: pointer;
		position: relative;
		transition: background-color 0.3s, border-color 0.3s; /* Add transitions */
	}

	&[type="checkbox"]:checked {
		background-color: #000; /* Background color when checked */
		border-color: #000; /* Border color when checked */
	}

	&:checked + span {
		text-decoration: line-through; /* Add strikethrough when checked */
		color: #ccc; /* Change text color when checked */
	}

	&[type="checkbox"]:checked::after {
		content: "✔";
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		transform: scale(1.2);
	}
`

const CheckboxLabel = styled.label`
	display: flex;
	align-items: ${(props) => props.$alignItems || "center"};
	flex-direction: ${(props) => props.$flexDirection || "row"};
	gap: 10px;
	width: 100%;
	padding: 27px 0;
	border-bottom: ${(props) => props.$borderBottom || "1px solid #ccc"};
`

export const AdWrapper = styled.div`
	width: 400px;
	height: 434px;
	margin-top: 80px;
`

export const Ad = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export default Recipes
