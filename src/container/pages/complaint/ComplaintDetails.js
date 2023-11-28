import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Skeleton, Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { ComplaintBrokerCard, ProjectDetailsWrapper } from './style';
import Details from './components/Details';
import ComplaintActivity from './components/ComplaintActivity';
import ComplaintDocuments from './components/ComplaintDocuments';
import { clearComplaint, getSingleComplaint } from '../../../redux/complaint/actionCreator';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { USDollar, formatToDate } from '../../../utility/utility';
import Heading from '../../../components/heading/heading';

function ComplaintDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { reportDetails, reportDetailsLoading } = useSelector((state) => state.complaint);
  useEffect(() => {
    dispatch(getSingleComplaint({ id }));
    return () => {
      dispatch(clearComplaint());
    };
  }, []);
  return (
    <>
      <ProjectDetailsWrapper>
        <PageHeader
          className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
          title={`Complaint - ${
            reportDetails?.complaint_number?.toLocaleString('en-US', {
              minimumIntegerDigits: 5,
              useGrouping: false,
            }) || ''
          }`}
        />
        <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 pb-[20px]">
          <Row gutter={25}>
            <Col xxl={8} xl={8} md={10} xs={24}>
              <Skeleton loading={reportDetailsLoading} active paragraph={{ rows: 3 }}>
                <Cards title="Complaint Details">
                  <div className="project-details">
                    <Row gutter={10}>
                      <Col xs={12}>
                        <div className="project-details__list">
                          <span>Complaint Number</span>
                          <p>
                            {reportDetails?.complaint_number?.toLocaleString('en-US', {
                              minimumIntegerDigits: 5,
                              useGrouping: false,
                            }) || ''}
                          </p>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="project-details__list">
                          <span>Load Number</span>
                          <p>{reportDetails?.load_number || ''}</p>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="project-details__list">
                          <span>Invoice Amount</span>
                          <p>{USDollar(reportDetails?.invoice_amount) || ''}</p>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="project-details__list">
                          <span>Invoice Due Date</span>
                          <p>{formatToDate(reportDetails?.invoice_due_date) || ''}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Cards>
                <ComplaintBrokerCard>
                  <Cards title="Broker Details">
                    <figcaption>
                      <div
                        style={{
                          textAlign: 'center',
                        }}
                        className="card__content"
                      >
                        <Heading className="card__name" as="h6">
                          {reportDetails?.broker?.legalName}
                        </Heading>
                      </div>
                      <div
                        style={{
                          textAlign: 'center',
                          paddingTop: '1rem',
                        }}
                        className="card__info"
                      >
                        <Row gutter={15}>
                          <Col xs={12}>
                            <div className="info-single">
                              <Heading className="info-single__title" as="h4">
                                {reportDetails?.broker.usdot}
                              </Heading>
                              <p>USDOT</p>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className="info-single">
                              <Heading className="info-single__title" as="h4">
                                MC-{reportDetails?.broker.mc_mx_number}
                              </Heading>
                              <p>MC/MX</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Heading as="h6">Contact Person</Heading>
                      <div className="card__info">
                        <div className="project-details__list">
                          <span>Name</span>
                          <p>{reportDetails?.contact_name || ''}</p>
                        </div>
                        <div className="project-details__list">
                          <span>Email</span>
                          <p>{reportDetails?.contact_email || ''}</p>
                        </div>
                        <div className="project-details__list">
                          <span>Phone</span>
                          <p>{reportDetails?.contact_phone || ''}</p>
                        </div>
                      </div>
                    </figcaption>
                  </Cards>
                </ComplaintBrokerCard>
              </Skeleton>
            </Col>
            <Col xxl={12} xl={16} md={12} xs={24}>
              <div className="about-project-wrapper">
                <Cards headless>
                  <Skeleton loading={reportDetailsLoading} active>
                    <Tabs
                      items={[
                        { label: 'Details', key: 'item-1', children: <Details data={reportDetails} /> },
                        { label: 'Activity', key: 'item-2', children: <ComplaintActivity data={reportDetails} /> },
                        {
                          label: 'Supporting Documents',
                          key: 'item-3',
                          children: <ComplaintDocuments reportDetails={reportDetails} />,
                        },
                      ]}
                    />
                  </Skeleton>
                </Cards>
              </div>
            </Col>
            {/* <Col xxl={16} lg={15} xs={24}>
            <TaskLists>
              <Cards
                title={
                  <nav>
                    <NavLink to="./tasklist">Task List</NavLink>
                    &nbsp; &nbsp;
                    <NavLink to="./activities">Activities</NavLink>
                  </nav>
                }
              >
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                    <Route index element={<TaskList />} />
                    <Route path="tasklist" element={<TaskList />} />
                    <Route path="activities" element={<Activities />} />
                  </Routes>
                </Suspense>
              </Cards>
            </TaskLists>
          </Col>
          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col> */}
          </Row>
        </main>
      </ProjectDetailsWrapper>
    </>
  );
}

ComplaintDetails.propTypes = {
  // match: propTypes.object,
};

export default ComplaintDetails;
