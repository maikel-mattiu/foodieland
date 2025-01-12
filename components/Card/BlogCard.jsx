import Link from "next/link"
import styled from "styled-components"

export const BlogCard = ({ imageSrc, title, subtitle, width, author, authorImage }) => {
	const linkTitle = title.replaceAll("%20", "-").toLowerCase()
	console.log(linkTitle)
	return (
		<CardWrapper>
			<ImageWrapper $width={width}>
				<Image src={imageSrc} />
			</ImageWrapper>
			<TextBlock>
				<TextLink href={`/blog/${title}`}>
					<h2 style={{ fontSize: "24px", width: "40ch" }}>{title}</h2>
				</TextLink>

				<p
					style={{
						fontSize: "14px",
						color: `rgba(0, 0, 0, 0.6)`,
						marginTop: "16px",
						width: "80ch",
						lineHeight: "1.5",
						textAlign: "justify"
					}}
				>
					{subtitle}
				</p>
				<AuthorMetaData author={author} authorImage={authorImage} />
			</TextBlock>
		</CardWrapper>
	)
}

export const AuthorMetaData = ({ author, authorImage }) => {
  return (
		<UserInfoWrapper>
			<UserInfoItem>
				<UserImageWrapper>
					<Image src={authorImage} />
				</UserImageWrapper>
				<p style={{ fontWeight: "bold" }}>{author}</p>
			</UserInfoItem>
			<UserInfoItem>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
					12 November 2021
				</p>
			</UserInfoItem>
		</UserInfoWrapper>
  )
}

const CardWrapper = styled.div`
	display: flex;
	gap: 40px;
	/* width: 840px; */
`
const ImageWrapper = styled.div`
	width: ${(props) => props.$width || "100px"};
	border-radius: 10px;
	overflow: hidden;
`
const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-basis: 100%;
`
const TextLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`
const UserImageWrapper = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`
const UserInfoWrapper = styled.div`
	display: inline-flex;
	margin-top: 30px;

	> *:first-child {
		border-right: #ccc 1px solid;
	}
	> *:last-child {
		padding: 0 32px;
	}
`
const UserInfoItem = styled.div`
	width: 200px;
	display: inline-flex;
	align-items: center;
	gap: 0 16px;
`
