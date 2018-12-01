import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  transform: rotate(45deg);
`;

export function Magnet(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M51.242 67.27C51.05 67.146 32 54.807 26.276 50.033c-3.032-2.527-4.806-6.221-4.996-10.401-.216-4.777 1.688-9.663 5.13-13.104 3.249-3.249 7.742-5.112 12.326-5.112 4.494 0 8.452 1.78 11.146 5.012 4.772 5.724 17.112 24.774 17.236 24.965.246.381.651.63 1.101.677.456.053.899-.11 1.219-.431l6.742-6.742a1.498 1.498 0 0 0 .21-1.857c-.518-.827-12.744-20.309-17.994-26.086-5.213-5.737-12.489-8.896-20.488-8.896-7.82 0-15.496 3.135-21.103 8.616l-.055.053-.176.176c-.018.017-.034.035-.05.052-5.684 5.808-8.819 13.769-8.608 21.874.2 7.691 3.356 14.695 8.886 19.72 5.777 5.25 25.259 17.476 26.086 17.994a1.504 1.504 0 0 0 1.857-.21l6.742-6.742a1.501 1.501 0 0 0-.245-2.321zM10.916 38.75c-.191-7.355 2.678-14.579 7.864-19.81 5.053-5.009 12.026-7.883 19.129-7.883 7.143 0 13.63 2.811 18.268 7.914 1.678 1.846 4.167 5.26 6.75 9.007l-4.711 4.71c-2.325-3.342-4.52-6.372-6.029-8.183-3.274-3.928-8.051-6.091-13.451-6.091-5.375 0-10.64 2.184-14.481 6.025-3.993 3.993-6.225 9.722-5.971 15.327.228 5.033 2.384 9.497 6.071 12.57 1.811 1.51 4.841 3.705 8.183 6.03l-4.711 4.711c-3.747-2.584-7.159-5.072-9.006-6.751-4.919-4.468-7.727-10.71-7.905-17.576zM89.362 85.805L77.33 80.852l4.689-6.675a1.498 1.498 0 0 0-.805-2.301L65.881 67.37a1.503 1.503 0 0 0-1.862 1.017 1.499 1.499 0 0 0 1.016 1.862l13.326 3.916-4.565 6.498a1.498 1.498 0 0 0 .657 2.249l13.768 5.667a1.501 1.501 0 0 0 1.958-.816 1.5 1.5 0 0 0-.817-1.958z" />
    </Svg>
  );
}