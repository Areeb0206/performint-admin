/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

function ComplaintDocuments({ reportDetails }) {
  return (
    <>
      {reportDetails?.signed_load_confirmation_media && reportDetails?.signed_load_confirmation_media?.length ? (
        <div>
          <Title level={5}>Signed Load Confirmation Document</Title>
          {reportDetails?.signed_load_confirmation_media?.map((item) => (
            <div key={item._id}>
              {/* {item.type.includes('image') ? (
                <>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '300px',
                      objectFit: 'cover',
                    }}
                    src={item.url}
                    alt={item.name}
                  />
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                </>
              ) : ( */}
              <>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </>
              {/* )} */}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      {reportDetails?.supporting_documents && reportDetails?.supporting_documents?.length ? (
        <div
          style={{
            marginTop: '1rem',
          }}
        >
          <Title level={5}>Supporting Documents</Title>
          {reportDetails?.supporting_documents?.map((item) => (
            <div key={item._id}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      {!reportDetails?.supporting_documents?.length && !reportDetails?.signed_load_confirmation_media?.length ? (
        <>No document provided with this complaint</>
      ) : (
        <></>
      )}
    </>
  );
}

ComplaintDocuments.propTypes = {
  reportDetails: PropTypes.object,
};

export default ComplaintDocuments;
