import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { USDollar, formatToDate } from '../../../../utility/utility';
// import PropTypes from 'prop-types';
// import { Cards } from '../../../../components/cards/frame/cards-frame';
// import { Tab } from '../../../components/tabs/tabs';

function Details() {
  const { reportDetails } = useSelector((state) => state.complaint);
  return (
    <div
      style={{
        padding: '0 1rem',
      }}
    >
      <Row gutter={25}>
        <Col md={12} xs={24}>
          Load Origin
          <p>{reportDetails?.load_origin}</p>
        </Col>
        <Col md={12} xs={24}>
          Load Destination
          <p>{reportDetails?.load_destination}</p>
        </Col>
      </Row>
      <Row gutter={25}>
        {reportDetails?.multiple_pickup && (
          <Col md={12} xs={24}>
            Multiple Pickups
            <p>{reportDetails?.multiple_pickup_count}</p>
          </Col>
        )}
        {reportDetails?.multiple_deliveries && (
          <Col md={12} xs={24}>
            Multiple Deliveries
            <p>{reportDetails?.multiple_deliveries_count}</p>
          </Col>
        )}
      </Row>
      <Row gutter={25}>
        {reportDetails?.pickup_date && (
          <Col md={12} xs={24}>
            Pickup Date
            <p>{formatToDate(reportDetails?.pickup_date)}</p>
          </Col>
        )}
        {reportDetails?.delivery_date && (
          <Col md={12} xs={24}>
            Delivery Date
            <p>{formatToDate(reportDetails?.delivery_date)}</p>
          </Col>
        )}
        {reportDetails?.delivery_on_time ? (
          <Col xs={24}>
            <p>
              <sup>*</sup>
              Load was delivered on time
            </p>
          </Col>
        ) : (
          <Col xs={24}>
            Load was delivered {reportDetails?.delivery_late_hours} hours late
            <p>Late delivery penalty: {USDollar(reportDetails?.delivery_late_penalty)}</p>
          </Col>
        )}
        <Col xs={24}>
          <hr />
        </Col>
        {reportDetails?.wrong_address && (
          <Col xs={24}>
            <p>The pickup/delivery address was wrong</p>
            {reportDetails?.paid_for_new_delivery ? (
              <p>
                Broker paid <strong>{USDollar(reportDetails?.paid_for_new_delivery_amount || 0)}</strong> for the new
                address
              </p>
            ) : (
              <p>Broker did not pay for the new address</p>
            )}
          </Col>
        )}
        {reportDetails?.delivery_delayed && (
          <Col xs={24}>
            <p>The pickup/delivery was delayed by {reportDetails?.delivery_delayed_hours || 0} hours</p>
          </Col>
        )}
        {reportDetails?.detention_faced && reportDetails?.detention_faced_hours ? (
          <>
            <Col xs={24}>
              <hr />
            </Col>
            <Col xs={24}>
              <p className="report-detail__item">
                Carrier was detained for <strong>{reportDetails?.detention_faced_hours || 0} hours</strong>
              </p>
              <div className="report-detail__item">
                {reportDetails?.detention_amount_promised || reportDetails?.detention_amount_paid ? (
                  <>
                    <div className="report-detail__item">
                      Amount promised
                      <h4>${reportDetails?.detention_amount_promised}</h4>
                    </div>
                    <div className="report-detail__item">
                      Amount actually paid
                      <h4>${reportDetails?.detention_amount_paid}</h4>
                    </div>
                  </>
                ) : (
                  <p>
                    Broker <strong>did not pay</strong> anything for detention time
                  </p>
                )}
              </div>
            </Col>
          </>
        ) : (
          <></>
        )}
        <Col xs={24}>
          <hr />
        </Col>
        <Col xs={24}>
          {reportDetails?.tonu_paid ? (
            <div className="report-detail__item">
              Broker paid <strong>{USDollar(reportDetails?.tonu_paid_amount || 0)}</strong> for TONU
            </div>
          ) : (
            <>
              <p>
                Broker <strong>did not pay</strong> for TONU
              </p>
            </>
          )}
        </Col>
        {reportDetails?.equipment_held && reportDetails?.equipment_held_hours ? (
          <>
            <Col xs={24}>
              <hr />
            </Col>
            <Col xs={24}>
              <p className="report-detail__item">
                Equipment was held for <strong>{reportDetails?.equipment_held_hours || 0} hours</strong>
              </p>
              <div className="report-detail__item">
                {reportDetails?.equipment_held_amount ? (
                  <p>
                    Broker paid <strong>{USDollar(reportDetails?.equipment_held_amount)}</strong> for holding equipment
                  </p>
                ) : (
                  <p>
                    Broker <strong>did not pay</strong> anything for holding the equipment
                  </p>
                )}
              </div>
            </Col>
          </>
        ) : (
          <></>
        )}
      </Row>
    </div>
  );
}

// Details.propTypes = {
//   data: PropTypes.object,
// };

export default Details;
