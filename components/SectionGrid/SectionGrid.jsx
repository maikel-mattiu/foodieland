import styled from "styled-components"
import Card from "../Card/Card"
import { GRID_INFO, INSTAGRAM_POSTS, MORE_RECIPES } from "@/data"

export const RecipeGrid = () => {
	return (
		<Grid
			$columns={3}
			$minWidth={"400px"}
			$maxWidth={"1fr"}
		>
			{GRID_INFO.map(({ imageSrc, title, fill, tag }) => (
				<Card
					key={title}
					src={imageSrc}
					title={title}
					fill={fill}
					isAd={title === "Ad Banner"}
					background={false}
					tag={tag}
				/>
			))}
		</Grid>
	)
}

export const CheckOutGrid = () => {
	return (
		<GridWrapper>
			<Grid
				$columns={4}
				$minWidth={"150px"}
				$maxWidth={"300px"}
				$gap={"80px"}
			>
				{INSTAGRAM_POSTS.map((post, index) => (
					<GridPost
						key={index}
						src={post.post}
					/>
				))}
			</Grid>
		</GridWrapper>
	)
}

export const MoreRecipesGrid = ({number}) => {
	return (
		<Grid
			$columns={4}
			$minWidth={"150px"}
			$maxWidth={"1fr"}
			$gap={"40px"}
		>
			{MORE_RECIPES.slice(0, number).map(({ imageSrc, title, fill, tag }) => (
				<Card
					key={title}
					src={imageSrc}
					title={title}
					fill={fill}
					background={true}
					tag={tag}
				/>
			))}
		</Grid>
	)
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.$columns},
		minmax(${(props) => props.$minWidth}, ${(props) => props.$maxWidth})
	);
	justify-items: center;
	grid-gap: ${(props) => props.$gap || "45px"};
	margin-top: 100px;
	padding: 0 40px;
`

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const GridPost = styled.img`
	width: 100%;
	height: 446px;
	object-fit: cover;
	object-position: center;
`
