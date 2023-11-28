/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { Modal, Timeline } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import RichTextEditor from 'react-rte';
import ReactHtmlParser from 'react-html-parser';
import NoteComposer from './Editor';
import { TimeLinePointerIconWrap } from '../../../ui-elements/ui-elements-styled';
import { SwShieldCheck, SwUsers } from '../../../../components/utilities/icons';
import { Button } from '../../../../components/buttons/buttons';
import { getComplaintConversation, addComplaintConversation } from '../../../../redux/complaint/service';

function ComplaintActivity() {
  const [postModalVisible, setPostModalVisible] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [activities, setActivities] = useState([]);
  const [richText, setRichText] = useState(RichTextEditor.createEmptyValue());
  const { reportDetails } = useSelector((state) => state.complaint);
  useEffect(() => {
    getComplaintConversation(reportDetails._id).then((res) => {
      setActivities(res.data.data.conversation);
    });
  }, [reportDetails._id]);

  const postActivity = () => {
    setPostLoading(true);
    const data = {
      message: richText.toString('html'),
      type: 'text',
    };
    addComplaintConversation(reportDetails._id, data)
      .then((res) => {
        setActivities([res.data.data, ...activities]);
        setPostModalVisible(false);
      })
      .finally(() => {
        setPostLoading(false);
      });
  };
  const getAvatar = (role) => {
    if (role === 'admin') {
      return <SwShieldCheck size={20} color="#2C99FF" />;
    }
    if (role === 'carrier') {
      return <SwUsers size={20} color="#20c997" />;
    }
    if (role === 'broker') {
      return <SwUsers size={20} color="#ff4d4f" />;
    }
  };
  const renderTimelineItem = (activity) => {
    return (
      <Timeline.Item
        className={activity.user_type === 'admin' ? 'info' : activity.user_type === 'carrier' ? 'success' : 'danger'}
        dot={getAvatar(activity.user_type)}
      >
        <strong
          style={{
            fontSize: '1.1rem',
          }}
        >
          {activity.user_type === 'carrier'
            ? reportDetails.carrierDetails.legalName
            : activity.user_type === 'broker'
            ? reportDetails.broker.legalName
            : 'You'}
        </strong>{' '}
        <span
          style={{
            fontSize: '0.9rem',
          }}
        >
          added a note
        </span>
        <p
          style={{
            color: '#bbb',
            fontSize: '0.9rem',
          }}
        >
          {dayjs(activity.created_at).format('MMM D, YYYY [at] h:mmA')}
        </p>
        <p>{ReactHtmlParser(activity.message)}</p>
      </Timeline.Item>
    );
  };
  return (
    <div
      style={{
        padding: '0 1rem',
      }}
    >
      <TimeLinePointerIconWrap>
        <Timeline>{activities.map((activity) => renderTimelineItem(activity))}</Timeline>
      </TimeLinePointerIconWrap>
      <Modal
        bodyStyle={{
          padding: 0,
        }}
        closable={false}
        width={1000}
        onCancel={() => setPostModalVisible(false)}
        open={postModalVisible}
        footer={null}
      >
        <NoteComposer onChange={setRichText} text={richText} />
        <div style={{ padding: '0.5rem 1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Button
            onClick={() => {
              setPostModalVisible(false);
              setRichText(RichTextEditor.createEmptyValue());
            }}
            size="default"
            type="primary"
            transparented
          >
            Cancel
          </Button>
          <Button loading={postLoading} onClick={postActivity} size="default" type="primary">
            Post
          </Button>
        </div>
      </Modal>
    </div>
  );
}

// ComplaintActivity.propTypes = {
//   data: PropTypes.object,
// };

export default ComplaintActivity;
