"use client"

import styled from "styled-components"
import { Button } from "../Button/Button"

const Categories = ({ info }) => {
	return (
		<CategoriesWrapper>
			<CategoriesTextWrapper>
				<h2 style={{ fontSize: "48px" }}>Categories</h2>
				<Button
					$backgroundColor="#E7FAFE"
					$textColor="#000000"
				>
					<span style={{ fontSize: "16px", fontWeight: 600 }}>
						View All Categories
					</span>
				</Button>
			</CategoriesTextWrapper>
			<CategoryCardWrapper>
				{info.map(({ gradient, label, image }) => (
					<CategoryCard
						key={label}
						$colorGradient={gradient}
					>
						<CatergoryCardImageWrapper>
							<CategoryCardImage
								src={image}
								alt={label}
							/>
						</CatergoryCardImageWrapper>
						<span style={{ fontSize: "18px", fontWeight: 600 }}>{label}</span>
					</CategoryCard>
				))}
			</CategoryCardWrapper>
		</CategoriesWrapper>
	)
}

const CategoriesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 160px 120px;
	gap: 120px 0;
`

const CategoriesTextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const CategoryCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const CategoryCard = styled.div`
	width: 180px;
	height: 152px;
	background: ${(props) => props.$colorGradient};
	border-radius: 30px;
	text-align: center;
`
const CatergoryCardImageWrapper = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	top: -50px;
	left: 40px;
	right: 40px;
`

const CategoryCardImage = styled.img`
	/* position: absolute; */
	width: 100%;
	object-fit: contain;
	object-position: center;
`

export default Categories
