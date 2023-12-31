import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column; // To make them vertical
`;
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
	${mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
	${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: solid 1px lightgray;
	${mobile({ width: "80%" })}
`;
const Input = styled.input`
	border: none;
	flex: 9;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: lightsteelblue;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get Notified on the best deals!</Desc>
			<InputContainer>
				<Input placeholder="Your Email Address" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
