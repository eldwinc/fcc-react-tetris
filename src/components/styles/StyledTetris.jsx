import styled from 'styled-components'
import bgImage from '../../img/bg.png'

export const StyledTetrisWrapper=styled.div`
	background: url(${bgImage}) #000;
	background-size: cover;
	height: 100vh;
	overflow:hidden;
	width: 100vw;
`

export const StyledTetris=styled.div`
	align-items: flex-start;
	display:flex;
	padding: 40px;
	max-width: 900px;
	margin: 0 auto;

	aside{
		width:100%;
		max-width:200px;
		display:block;
		padding: 0 20px;
	}
`