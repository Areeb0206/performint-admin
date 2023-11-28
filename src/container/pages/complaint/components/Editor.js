/* eslint-disable no-unused-expressions */
import React from 'react';
// import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
// import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
// import UilExclamationCircle from '@iconscout/react-unicons/icons/uil-exclamation-circle';
import RichTextEditor from 'react-rte';
import 'react-tagsinput/react-tagsinput.css';
// import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Upload, message } from 'antd';
import { MailBox } from '../style';
import { Button } from '../../../../components/buttons/buttons';

function NoteComposer({ onChange, text }) {
  //   const [state, setState] = useState({
  //     value: RichTextEditor.createEmptyValue(),
  //     tags: defaultTag ? [defaultTag] : [],
  //   });

  const onChanges = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  //   const onSubmit = () => {
  //     onSend && onSend(state.value.toString('html'));
  //   };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <MailBox>
      <div className="body">
        <div className="group">
          <RichTextEditor
            toolbarConfig={{
              // Optionally specify the groups to display (displayed in the order listed).
              display: [
                'INLINE_STYLE_BUTTONS',
                'BLOCK_TYPE_BUTTONS',
                'LINK_BUTTONS',
                'BLOCK_TYPE_DROPDOWN',
                // 'HISTORY_BUTTONS',
              ],
              INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' },
              ],
              BLOCK_TYPE_DROPDOWN: [
                { label: 'Normal', style: 'unstyled' },
                { label: 'Heading Large', style: 'header-one' },
                { label: 'Heading Medium', style: 'header-two' },
                { label: 'Heading Small', style: 'header-three' },
              ],
              BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' },
              ],
            }}
            placeholder="Type your message..."
            value={text}
            onChange={onChanges}
          />
        </div>
      </div>
      <div className="footer">
        <div className="left d-flex align-items-center">
          <Upload {...props}>
            <Button size="small" type="primary">
              {/* <UilPaperclip /> */}
              Attach files
            </Button>
          </Upload>
          {/* <Link to="#">
            </Link> */}
          {/* <Link to="#">
              <UilExclamationCircle />
            </Link> */}
        </div>
        {/* <div className="right">
            <Link to="#">
              <UilTrashAlt />
            </Link>
          </div> */}
      </div>
    </MailBox>
  );
}

NoteComposer.propTypes = {
  onChange: propTypes.func,
  onSend: propTypes.func,
  defaultTag: propTypes.string,
  replay: propTypes.bool,
  text: propTypes.string,
};

export default NoteComposer;
