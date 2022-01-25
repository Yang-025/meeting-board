import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as MeetingBoardActions from './MeetingBoardActions';
import SocketIoConnectHoc from './SocketIoConnectHoc';
import Board from './Board';
import CreateCardModal from './CreateCardModal';
import MeetingBoardDiv from './MeetingBoardStyles';


const MeetingBoard = (props) => {
  const {
    data,
    boardId,
    getBoard,
    deleteFeatureCard,
    createFeature,
    updateFeature,
    deleteFeature,
    addFeatureCard
  } = props;

  // https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
  useEffect(() => {
    getBoard(boardId);
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const [tmpPosition, setTmpPosition] = useState({
    tmpFeature: null,
    tmpEvaluation: null,
  });

  const onSure = (cardContent) => {
    const { tmpFeature, tmpEvaluation } = tmpPosition;
    addFeatureCard({
      feature: tmpFeature,
      evaluation: tmpEvaluation,
      cardText: cardContent
    });
    console.log('tmpFeature, tmpEvaluation, cardContent', tmpFeature, tmpEvaluation, cardContent);
    setTmpPosition({
      tmpFeature: null,
      tmpEvaluation: null,
    });
    setShowAddModal(!showAddModal);
  };

  const handleAddCard = (feature, evaluation) => {
    setTmpPosition({
      tmpFeature: feature,
      tmpEvaluation: evaluation,
    });
    setShowAddModal(!showAddModal);
  };

  return (
    <MeetingBoardDiv>
      <div className="meeting-board">
        <Board
          data={data}
          deleteFeatureCard={deleteFeatureCard}
          handleAddCard={handleAddCard}
          createFeature={createFeature}
          updateFeature={updateFeature}
          deleteFeature={deleteFeature}
        />
      </div>
      <div className="meeting-status">
        <h3>狀態</h3>
      </div>
      {
        showAddModal ?
          <CreateCardModal
            isOpen={showAddModal}
            toggle={() => setShowAddModal(!showAddModal)}
            addFeatureCard={onSure}
          /> : <div />
      }
    </MeetingBoardDiv>
  );
};


const mapStateToProps = (state) => {
  return {
    data: state.meetingBoard.data,
    boardId: state.meetingBoard.boardId,
  };
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapDispatchToProps = {
  getBoard: MeetingBoardActions.getBoard,
  addFeatureCard: MeetingBoardActions.addFeatureCard,
  deleteFeatureCard: MeetingBoardActions.deleteFeatureCard,
  updateBoard: MeetingBoardActions.updateBoard,
  createFeature: MeetingBoardActions.createFeature,
  updateFeature: MeetingBoardActions.updateFeature,
  deleteFeature: MeetingBoardActions.deleteFeature,
};

export default connect(mapStateToProps, mapDispatchToProps)(SocketIoConnectHoc(MeetingBoard));
