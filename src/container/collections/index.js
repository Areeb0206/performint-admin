/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Table, Pagination, Tag, Select, Radio, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Heading from '../../components/heading/heading';
import { GlobalUtilityStyle, PaginationStyle, ProjectListTitle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { getCollectionPartnerComplaintsList } from '../../redux/collection/actionCreator';
import { USDollar } from '../../utility/utility';
import { acceptCollectionComplaint } from '../../redux/collection/service';

function ProjectLists() {
  const dispatch = useDispatch();
  const { list, listLoading, listTotal } = useSelector((state) => state.collection);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const [typeFilter, setTypeFilter] = useState('pending');
  const [statusFilter, setStatusFilter] = useState('all');

  const getCollectionsData = useCallback(() => {
    dispatch(
      getCollectionPartnerComplaintsList({
        query: { start, limit, status: typeFilter === 'pending' ? typeFilter : statusFilter },
      }),
    );
  }, [dispatch, start, limit, typeFilter, statusFilter]);

  useEffect(() => {
    getCollectionsData();
  }, [start, limit, typeFilter, statusFilter]);

  const columns = [
    {
      title: 'Broker',
      dataIndex: 'broker',
      key: 'broker',
      render: (item, record) => (
        <ProjectListTitle>
          {/* <Link to={`/brokers/${record.complaint.usdot}/overview`}> */}
          {record.complaint?.company_name ? (
            <Heading as="h4">{record.complaint.company_name}</Heading>
          ) : (
            <div style={{ fontSize: '0.8rem' }}>Not Assigned</div>
          )}
          {/* </Link> */}
        </ProjectListTitle>
      ),
    },
    {
      title: 'Complaint #',
      dataIndex: 'complaint',
      key: 'complaint',
      render: (item, record) => (
        <span
          style={{
            cursor: 'pointer',
          }}
          className="date-finished"
        >
          <Link to={`/complaint/${record.complaint._id}`}>
            {record.complaint.complaint_number?.toLocaleString('en-US', {
              minimumIntegerDigits: 5,
              useGrouping: false,
            }) || ''}
          </Link>
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag className={status}>{status}</Tag>,
    },
    {
      title: 'Invoice Amount',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => <span className="date-finished">{USDollar(record.complaint.invoice_amount)}</span>,
    },
    {
      title: 'Filed on',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (createdAt) => (
        <div className="project-list-progress">
          <p>{moment(createdAt).format('DD MMM YYYY')}</p>
          {/* <Progress percent={status === 'complete' ? 100 : percentage} strokeWidth={5} className="progress-primary" />
          <p>12/15 Task Completed</p> */}
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: 100,
      render: (_, record) => <TableButton record={record} getCollectionsData={getCollectionsData} />,
    },
  ];

  const handleChangeType = (e) => {
    setStart(0);
    setLimit(10);
    setTypeFilter(e.target.value);
  };

  const handleChangeStatus = (value) => {
    setStart(0);
    setLimit(10);
    setStatusFilter(value);
  };

  return (
    <>
      <PageHeader
        //   routes={PageRoutes}
        title="Collections"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <GlobalUtilityStyle>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                  }}
                  className="ninjadash-card-nav"
                >
                  <Radio.Group size="large" defaultValue="pending" onChange={handleChangeType}>
                    <Radio.Button value="pending">Pending</Radio.Button>
                    <Radio.Button value="accepted">Accepted</Radio.Button>
                  </Radio.Group>
                  {typeFilter === 'accepted' ? (
                    <div>
                      Collection status:{' '}
                      <Select
                        style={{
                          minWidth: '120px',
                        }}
                        defaultValue="all"
                        onChange={handleChangeStatus}
                      >
                        <Select.Option value="all">All</Select.Option>
                        <Select.Option value="processing">Processing</Select.Option>
                        <Select.Option value="collected">Collected</Select.Option>
                        <Select.Option value="failed">Failed</Select.Option>
                      </Select>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <Divider />
                <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                  <div className="table-responsive table-th-shape-none table-head-rounded table-th-text-light hover-tr-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                    <Table pagination={false} dataSource={list} columns={columns} loading={listLoading} />
                  </div>
                </div>
              </Cards>
            </Col>
            <Col xs={24} className="pb-30">
              <PaginationStyle>
                {list.length ? (
                  <Pagination
                    onChange={(page, pageSize) => {
                      setStart(pageSize * (page - 1));
                      setLimit(pageSize);
                    }}
                    pageSizeOptions={
                      listTotal >= 100
                        ? ['10', '20', '50', '100']
                        : listTotal >= 50
                        ? ['10', '20', '50']
                        : listTotal >= 20
                        ? ['10', '20']
                        : ['10']
                    }
                    showSizeChanger
                    onShowSizeChange={(_, size) => {
                      setLimit(size);
                      setStart(0);
                    }}
                    pageSize={limit}
                    defaultCurrent={1}
                    total={listTotal}
                  />
                ) : null}
              </PaginationStyle>
            </Col>
          </Row>
        </GlobalUtilityStyle>
      </div>
    </>
  );
}

function TableButton({ record, getCollectionsData }) {
  const [acceptLoading, setAcceptLoading] = useState(false);
  return (
    <>
      {record.status === 'pending' ? (
        <Button
          loading={acceptLoading}
          type="success"
          onClick={() => {
            setAcceptLoading(true);
            acceptCollectionComplaint(record._id)
              .then(() => {
                getCollectionsData();
              })
              .finally(() => {
                setAcceptLoading(false);
              });
          }}
        >
          Accept
        </Button>
      ) : (
        <Button
          onClick={() => {
            // setAssignModalVisible('Assign Partner');
            // setSelectedComplaint(record._id);
          }}
        >
          Update Status
        </Button>
      )}
    </>
  );
}

export default ProjectLists;
