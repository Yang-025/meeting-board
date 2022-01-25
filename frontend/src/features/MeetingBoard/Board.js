import React from 'react';
// import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'reactstrap';

import FeatureTitle from './FeatureTitle';

import BoardDiv from './BoardStyles';

const AddCardTrigger = ({ onClick }) => {
  return (
    <div className="owner--evaluation--add">
      <div
        onClick={onClick}
        onKeyUp={() => { }}
      >
        <span className="icon-add" />
        <span>創建</span>
      </div>
    </div>
  );
};


const Panel = ({ ownerList, deleteFeatureCard }) => {
  return ownerList.map(owner => {
    return (
      <div className="card" key={owner.id}>
        <div className="card--icon">
          <FaTrash size={16} onClick={() => deleteFeatureCard(owner.id)} />
        </div>
        <div className="card--content">{owner.content}</div>
      </div>
    );
  });
};


const MeetingBoard = ({ data, createFeature, updateFeature, deleteFeature, deleteFeatureCard, handleAddCard }) => {
  return (
    <BoardDiv className="meeting-board">
      <div className="control-panel">
        <Button color="primary" onClick={createFeature}>添加列表</Button>
        {/* <Button color="danger">一鍵清空</Button> */}
      </div>
      <div className="feature header">
        <div className="feature--name" />
        <div className="owner--evaluation">HARD</div>
        <div className="owner--evaluation">ROUTINE</div>
        <div className="owner--evaluation">SUGGESTION</div>
      </div>
      {
        data.map(item => {
          return (
            <div className="feature">
              {/* <div className="feature--name">
              {item.feature}
              <FaTrash size={16} onClick={() => { }} />
              <input type="text" value="" />
            </div> */}
              <FeatureTitle
                title={item.feature.name}
                updateFeature={(term) => updateFeature(term, item.feature.id)}
                deleteFeature={() => deleteFeature(item.feature.id)}
              />
              <div className="owner--evaluation">
                <div className="owner--evaluation--content">
                  <Panel
                    ownerList={item.hard}
                    deleteFeatureCard={(cardId) =>
                      deleteFeatureCard({ feature: item.feature.id, evaluation: 'hard', cardId })}
                  />
                </div>

                <AddCardTrigger
                  onClick={() => handleAddCard(item.feature.id, 'hard')}
                />
              </div>
              <div className="owner--evaluation">
                <div className="owner--evaluation--content">
                  <Panel
                    ownerList={item.routine}
                    deleteFeatureCard={(cardId) =>
                      deleteFeatureCard({ feature: item.feature.id, evaluation: 'routine', cardId })}
                  />
                </div>
                <AddCardTrigger
                  onClick={() => handleAddCard(item.feature.id, 'routine')}
                />
              </div>
              <div className="owner--evaluation">
                <div className="owner--evaluation--content">
                  <Panel
                    ownerList={item.suggestion}
                    deleteFeatureCard={(cardId) =>
                      deleteFeatureCard({ feature: item.feature.id, evaluation: 'suggestion', cardId })}
                  />
                </div>
                <AddCardTrigger
                  onClick={() => handleAddCard(item.feature.id, 'suggestion')}
                />
              </div>
            </div>
          );
        })
      }
    </BoardDiv>
  );
};

export default MeetingBoard;
