import { Select } from "antd";
import { useAtom } from "jotai";
import React from "react";
import { iboAtom, iboListAtom } from "../../jotaiStore/ibo";
import { Link, useNavigate } from "react-router-dom";

export default function SelectIbo({ setLoading }) {
  const [iboDetails, setIboDetails] = useAtom(iboAtom);
  const [IboList] = useAtom(iboListAtom);
  const navigate = useNavigate();
  return (
    <div>
      <Select
        showSearch
        placeholder="Select a Ibo"
        defaultValue={iboDetails?.iboName}
        optionFilterProp="children"
        onChange={(e, b) => {
          const ibo = IboList?.find((i) => i._id === e);
          localStorage.setItem("iboDetails", JSON.stringify(ibo));
          setIboDetails(ibo);
          navigate(`/ibo/${e}/dashboard`);
        }}
        onSearch={() => {}}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        // options={IboList?.map((i) => {
        //   return {
        //     label: i.iboName,
        //     value: i._id,
        //   };
        // })}
      >
        {IboList?.map((i) => {
          return (
            <Select.Option key={i._id} value={i._id} label={i.iboName}>
              {i.iboName}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}
