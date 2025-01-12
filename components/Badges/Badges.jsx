import styled from "styled-components"

export const UserBadge = ({ title, subtitle }) => {
	return (
		<BadgeWrapper>
			<UserImageWrapper>
				<UserImage src="/images/user.png" />
			</UserImageWrapper>
			<TextBlock>
				<h2 style={{ fontSize: "18px" }}>{title}</h2>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)` }}>
					{subtitle}
				</p>
			</TextBlock>
		</BadgeWrapper>
	)
}

export const ImageBadge = ({ title, subtitle, image, width }) => {
	return (
		<BadgeWrapper>
			<ImageWrapper $width={width}>
				<Image
					src={image}
					alt={title}
				/>
			</ImageWrapper>
			<TextWrapper>
				<h2 style={{ fontSize: "18px", width: "16ch" }}>{title}</h2>
				<p style={{ fontSize: "14px", color: `rgba(0, 0, 0, 0.6)`, marginTop: "16px" }}>
					{subtitle}
				</p>
			</TextWrapper>
		</BadgeWrapper>
	)
}

export const BadgeWrapper = styled.div`
	display: flex;
	gap: 16px;
`

export const Badge = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 30px;
	padding: 8px 16px;
`

const UserImageWrapper = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ImageWrapper = styled.div`
	width: ${props => props.$width || "100px"};
	border-radius: 10px;
	overflow: hidden;
`

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const IconWrapper = styled.div`
	border-radius: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
`

const UserImage = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`

export const TextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	justify-content: center;
	flex-basis: 100%;
`
const TextWrapper = styled(TextBlock)`
  flex-basis: 200px;
`