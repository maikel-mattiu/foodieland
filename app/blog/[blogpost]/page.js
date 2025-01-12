"use client"

import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "@/app/page"
import { Title } from "@/app/recipes/page"
import { Button } from "@/components/Button/Button"
import { AuthorMetaData } from "@/components/Card/BlogCard"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import { BLOG_POSTS } from "@/data"
import { useParams } from "next/navigation"
import { Facebook } from "react-feather"
import { Instagram } from "react-feather"
import { Twitter } from "react-feather"
import styled from "styled-components"

const BlogPostPage = () => {
	const { blogpost } = useParams()
	const postTitle = blogpost.replaceAll("%20", " ")
	const { title, author, authorImage, blogLargeImage } = BLOG_POSTS.find(
		(post) => post.title === postTitle
	)

	return (
		<BlogPage>
			<HeadContentWrapper>
				<Title>{title}</Title>
				<AuthorMetaData
					author={author}
					authorImage={authorImage}
				/>
				<p
					style={{
						marginTop: "48px",
						textAlign: "center",
						color: `rgba(0, 0, 0, 0.6)`,
						width: "100ch"
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
					metus vel tincidunt malesuada, velit turpis malesuada metus vel
					tincidunt malesuada, velit turpis malesuada metus vel tincidunt
					malesuada, velit turpis malesuada{" "}
				</p>
			</HeadContentWrapper>
			<ImageWrapper>
				<Thumbnail
					src={blogLargeImage}
					alt={title}
				/>
			</ImageWrapper>
			<MainArea>
				<MainContent>
					<TextBlock>
						<h2
							style={{
								marginBottom: "24px",
								fontSize: "24px",
								fontWeight: "bold",
								lineHeight: "36px",
								letterSpacing: "-0.04em"
							}}
						>
							How did you start out in the food industry?
						</h2>
						<p
							style={{
								textAlign: "justify",
								lineHeight: "30px",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
							turpis. Ut vehicula sed velit a faucibus. In feugiat
							vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
							feugiat elementum ex ut suscipit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
							at congue diam, at dignissim turpis. Ut vehicula sed velit a
							faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
							mollis ex. Praesent feugiat elementum ex ut suscipit.
						</p>
					</TextBlock>
					<TextBlock $margin="80px 0 40px 80px">
						<h2
							style={{
								marginBottom: "24px",
								fontSize: "24px",
								fontWeight: "bold",
								lineHeight: "36px",
								letterSpacing: "-0.04em"
							}}
						>
							What do you like most about your job?{" "}
						</h2>
						<p
							style={{
								textAlign: "justify",
								lineHeight: "30px",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
							turpis. Ut vehicula sed velit a faucibus. In feugiat
							vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
							feugiat elementum ex ut suscipit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
							at congue diam, at dignissim turpis. Ut vehicula sed velit a
							faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
							mollis ex. Praesent feugiat elementum ex ut suscipit.
						</p>
					</TextBlock>
					<TextBlock $margin="40px 0 40px 80px">
						<h2
							style={{
								fontSize: "24px",
								fontWeight: "bold",
								lineHeight: "36px",
								letterSpacing: "-0.04em"
							}}
						>
							Do you cook at home on your days off?
						</h2>
						<ImageWrapper
							$width="100%"
							$height="600px"
							$margin="32px 0 0 0"
						>
							<Thumbnail
								src="/images/woman-in-kitchen.png"
								alt={title}
							/>
						</ImageWrapper>
						<p
							style={{
								textAlign: "justify",
								lineHeight: "30px",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
							turpis. Ut vehicula sed velit a faucibus. In feugiat
							vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
							feugiat elementum ex ut suscipit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
							at congue diam, at dignissim turpis. Ut vehicula sed velit a
							faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
							mollis ex. Praesent feugiat elementum ex ut suscipit.
						</p>
					</TextBlock>
					<TextBlock $margin="20px 0 40px 80px">
						<h2
							style={{
								marginBottom: "24px",
								fontSize: "24px",
								fontWeight: "bold",
								lineHeight: "36px",
								letterSpacing: "-0.04em"
							}}
						>
							What would your advice be to young people looking to get their
							foot in the door?
						</h2>
						<p
							style={{
								textAlign: "justify",
								lineHeight: "30px",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
							turpis. Ut vehicula sed velit a faucibus. In feugiat
							vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
							feugiat elementum ex ut suscipit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
							at congue diam, at dignissim turpis. Ut vehicula sed velit a
							faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
							mollis ex. Praesent feugiat elementum ex ut suscipit.
						</p>
					</TextBlock>
					<Decor>
						<p
							style={{
								fontStyle: "italic",
								fontSize: "36px",
								fontWeight: "semibold"
							}}
						>
							{" "}
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio.”
						</p>
					</Decor>
					<TextBlock $margin="80px 0 40px 80px">
						<h2
							style={{
								marginBottom: "24px",
								fontSize: "24px",
								fontWeight: "bold",
								width: "50ch",
								lineHeight: "36px",
								letterSpacing: "-0.04em"
							}}
						>
							What is the biggest misconception that people have about being
							a professional chef?
						</h2>
						<p
							style={{
								textAlign: "justify",
								lineHeight: "30px",
								color: `rgba(0, 0, 0, 0.6)`
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
							turpis. Ut vehicula sed velit a faucibus. In feugiat
							vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
							feugiat elementum ex ut suscipit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
							at congue diam, at dignissim turpis. Ut vehicula sed velit a
							faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id
							mollis ex. Praesent feugiat elementum ex ut suscipit.
						</p>
					</TextBlock>
				</MainContent>
				<SocialsWrapper>
					<h5>SHARE THIS ON:</h5>
					<Facebook />
					<Instagram />
					<Twitter />
				</SocialsWrapper>
			</MainArea>
			<div style={{ margin: "0 -80px 160px -80px" }}>
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
					Check out the delicious recipe
				</h2>
				<MoreRecipesGrid number={4} />
			</div>
		</BlogPage>
	)
}

const BlogPage = styled.div`
	margin: 0 80px;
`

const HeadContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 80px;
	margin-bottom: 64px;
`

const ImageWrapper = styled.div`
	width: ${(props) => props.$width || "100%"};
	height: ${(props) => props.$height || "800px"};
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	margin: ${(props) => props.$margin || " 64px 0 80px 0px"};
`

const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-basis: 100%;
	margin: ${(props) => props.$margin || "0 80px"};
`

const Thumbnail = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`
const MainArea = styled.div`
	display: flex;
	gap: 50px;
`
const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	flex: 3;
`
const SocialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	flex: 1;
`

const Decor = styled.div`
	width: 920px;
	height: 224px;
	margin: 0 40px;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
	padding: 40px;
`

export default BlogPostPage
