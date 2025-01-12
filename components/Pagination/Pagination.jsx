import style from "styled-components"

export const Pagination = () => {
  return (
		<FlexWidthWrapper>
			<PaginationWrapper>
				<PageButton>1</PageButton>
				<PageButton>2</PageButton>
				<PageButton>3</PageButton>
				<PageButton>4</PageButton>
				<PageButton>5</PageButton>
				<PageButton>...</PageButton>
				<PageButton>10</PageButton>
			</PaginationWrapper>
		</FlexWidthWrapper>
  )
}
const FlexWidthWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0 160px 0;
`

const PaginationWrapper = style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  > *:first-child {
    background-color: #000;
    color: #fff;
  }
`
const PageButton = style.button`
  background-color: #fff;
  width: 64px;
  height: 64px;
  border: #ccc solid 1px;
  border-radius: 16px;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`