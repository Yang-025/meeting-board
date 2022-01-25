import styled from 'styled-components';

const BoardDiv = styled.div`
&.meeting-board {
  padding: 3rem;
  display: flex;
  justify-content: space-around;
}

.feature {
  font-size: 2rem;
  flex: 1;
  text-align: center;
  margin: 1rem;
  width: 13rem;

  &--name {
    height: 2rem;
    cursor: pointer;
  }

  > div {
    margin-top: 1rem;
  }

  &.header {
    font-size: 1.5rem;

    .owner--evaluation {
      display: flex;
      justify-content: center;
      align-items: center;

    }
  }
}

.owner--evaluation {
  border: 1px solid orange;
  height: 14rem;
  /* height: 100%; */
  padding: 0.2rem;
  /* display: flex; */
  max-width: 20rem;
  position: relative;
  /* flex-wrap: wrap; */
  /* overflow-y: auto; */
  &:hover {
    /* border: 1px solid red; */
    cursor: pointer;
  }

  &--content {
    height: 100%;
    /* border: 1px solid blue; */
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  &--add {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ccc;
    color: #999;
    font-size: 0.8rem;

  }
}
.card {
  /* > * {
    border: 1px solid orange;
  } */
  border: 1px solid green;
  width: 5rem;
  height: 5rem;
  margin: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-around;

  &--icon {
    display: flex;
    justify-content: flex-end;
    height: 1rem;
  }
  &--content {
    height: 3rem;
  }
}


.icon-add:before {
    content: '\0002B';
}

position: relative;
.control-panel {
  top: 1.5rem;
  position: absolute;
  button:not(:last-child) {
    margin-right: 1rem;
  }
}

`;


export default BoardDiv;
