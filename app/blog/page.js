"use client"
import styled from "styled-components"
import {
	Ad,
	AdWrapper,
	IngredientsSideBox,
	MainArea,
	MainSection,
	Title
} from "../recipes/page"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"
import { Button } from "@/components/Button/Button"
import { ImageBadge } from "@/components/Badges/Badges"
import { BlogCard } from "@/components/Card/BlogCard"
import { BLOG_POSTS } from "@/data"
import { Pagination } from "@/components/Pagination/Pagination"

function Blog() {
	return (
		<BlogSection>
			<BlogTextWrapper>
				<Title>Blog & Article</Title>
				<p style={{ marginTop: "40px", color: "#ccc" }}>
					Officia et elit pariatur consectetur aliqua laborum nulla adipisicing
					duis ad occaecat. Consequat velit non pariatur id ex enim occaecat ut
					eu incididunt eu deserunt.
				</p>
				<SearchBoxWrapper>
					<EmailBox
						type="text"
						placeholder="Search article, news or recipe..."
					/>
					<Button
						$backgroundColor="#000000"
						$textColor="#ffffff"
						$width="160px"
					>
						Search
					</Button>
				</SearchBoxWrapper>
			</BlogTextWrapper>
			<MainSection>
				<MainArea>
					{BLOG_POSTS.map(({ title, blogSmallImage, author, authorImage }) => (
						<BlogCard
							key={title}
							imageSrc={blogSmallImage}
							// alt="image-badge"
							title={title}
							subtitle="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim. Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
							width={"400px"}
							author={author}
							authorImage={authorImage}
						/>
					))}
				</MainArea>
				<SideBox>
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
				</SideBox>
			</MainSection>
			<Pagination />
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
					sapien vel tincidunt bibendum, velit turpis tincidunt velit.{" "}
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
		</BlogSection>
	)
}

const BlogSection = styled.section`
	margin: 0 80px;
`
const SearchBoxWrapper = styled(EmailBoxWrapper)`
	border: #ccc 1px solid;
	margin-top: 80px;
	width: 700px;
`
const BlogTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 80px;
`

const SideBox = styled(IngredientsSideBox)``

export default Blog
