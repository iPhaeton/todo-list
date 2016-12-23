import styled from "styled-components";

const ItemPanel = styled.div`
    margin: 0;
    padding: 15px;
    background-color: ${props => props.done ? '#3d3' : '#fff'};
`;

export default ItemPanel;