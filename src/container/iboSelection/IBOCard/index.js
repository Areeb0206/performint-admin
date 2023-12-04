import { Col, Divider, Row } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
function IBOCard({ item }) {
  const navigate = useNavigate();
  return (
    <Col
      sm={24}
      lg={11}
      className="bg-[#D8FFE5] rounded-lg p-4 cursor-pointer"
      onClick={() => {
        navigate("/ibo/dashboard");
      }}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-2xl text-[#03812E]">{item?.iboName}</div>
        </div>
        <div className="bg-white py-1 px-2 rounded-lg ">
          <RightOutlined className="text-[#03812E]" />
        </div>
      </div>
      <div className="mt-5">
        <div className="font-semibold text-base text-[#03812E]">
          Today's Balance
        </div>
      </div>
      <div className="flex justify-between items-center py-1 ">
        <div className="text-black text-sm">Net Balance</div>
        <div className="text-black text-sm">$10,000</div>
      </div>
      <div className="flex justify-between items-center py-1 ">
        <div className="text-black text-sm">Debit</div>
        <div className="text-black text-sm">$3000</div>
      </div>

      <div className="flex justify-between items-center py-1 ">
        <div className="text-black text-sm">Daily Credit</div>
        <div className="text-black text-sm">$20,000</div>
      </div>
    </Col>
  );
}

export default IBOCard;
