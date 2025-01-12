"use client"

import styled from "styled-components"
import { Title } from "../recipes/page"
import { Button } from "@/components/Button/Button"
import { MoreRecipesGrid } from "@/components/SectionGrid/SectionGrid"
import {
	EmailBox,
	EmailBoxWrapper,
	InboxImage,
	InboxImageOneWrapper,
	InboxImageTwoWrapper,
	InboxSection
} from "../page"

function Contact() {
	return (
		<ContactSection>
			<MainContentWrapper>
				<Title>Contact Us</Title>
				<ContactFormWrapper>
					<ImageWrapper
						// $width="400px"
						$height="500px"
						$margin="64px 0 80px 0px"
					>
						<Thumbnail src="/images/smiling-chef.png" />
					</ImageWrapper>
					<ContactFormGrid>
						<ItemWrapper>
							<h6 style={{ color: `rgba(0, 0, 0, 0.6)` }}>NAME</h6>
							<NameInput
								type="text"
								placeholder="Enter your name..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<h6 style={{ color: `rgba(0, 0, 0, 0.6)` }}>EMAIL ADDRESS</h6>
							<EmailInput
								type="email"
								placeholder="Your email address..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<h6 style={{ color: `rgba(0, 0, 0, 0.6)` }}>SUBJECT</h6>
							<SubjectInput
								type="text"
								placeholder="Enter subject..."
							/>
						</ItemWrapper>
						<ItemWrapper>
							<h6 style={{ color: `rgba(0, 0, 0, 0.6)` }}>ENQUIRY TYPE</h6>
							<EnquiryInput
								type="select"
								name="enquiry"
								placeholder=""
							>
								<option
									value="General Enquiry"
									selected
								>
									Advertising
								</option>
								<option value="Order Enquiry">Order Enquiry</option>
								<option value="Delivery Enquiry">Delivery Enquiry</option>
							</EnquiryInput>
						</ItemWrapper>
						<MessageWrapper>
							<h6 style={{ color: `rgba(0, 0, 0, 0.6)` }}>MESSAGES</h6>
							<MessageInput
								type="text"
								placeholder="Message"
							/>
						</MessageWrapper>
						<SubmitButton
							type="submit"
							$textColor="white"
							$backgroundColor="black"
						>
							Send Message
						</SubmitButton>
					</ContactFormGrid>
				</ContactFormWrapper>
			</MainContentWrapper>
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
		</ContactSection>
	)
}

const ContactSection = styled.div`
	margin: 0 80px;
`

const MainContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  margin-top: 80px;
`

const ContactFormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 80px;
	gap: 40px;
`

const ContactFormGrid = styled.form`
  flex: 3;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "name email" "subject enquiry" "message message" "submit submit";
	grid-gap: 30px 20px;
	margin-top: 40px;
`

const NameInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	grid-area: name;
`
const EmailInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	grid-area: email;
`

const SubjectInput = styled.input`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	grid-area: subject;
`

const EnquiryInput = styled.select`
	height: 60px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
	grid-area: enquiry;
	color: rgba(0, 0, 0, 0.6);
`
const MessageInput = styled.textarea`
	width: 100%;
	height: 250px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 16px;
`

const SubmitButton = styled(Button)`
	grid-area: submit;
	width: 180px;
`

const ImageWrapper = styled.div`
	width: ${(props) => props.$width || "100%"};
	height: ${(props) => props.$height || "800px"};
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	margin: ${(props) => props.$margin || " 64px 0 80px 0px"};
	background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  flex: 1;
`

const Thumbnail = styled.img`
	position: absolute;
	bottom: 0;
	left: 30px;
	width: 85%;
	object-fit: cover;
	object-position: center;
`

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

const MessageWrapper = styled(ItemWrapper)`
	grid-area: message;
`

export default Contact
