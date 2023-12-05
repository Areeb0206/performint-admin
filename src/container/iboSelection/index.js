import { Button, Col, Input, message, Modal, notification, Row } from "antd";
import image1 from "../../static/performmint/initialPage/image1.png";
import image2 from "../../static/performmint/initialPage/image2.png";
import { addIBO, getIBODetails } from "../../redux/ibo/service";
import IBOCard from "./IBOCard";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iboAtom, iboListAtom } from "../../jotaiStore/ibo";
import { useAtom } from "jotai";

function IBOSelection() {
  const [createIBO, setCreateIBO] = useState(false);
  const [IboList, setIboList] = useAtom(iboListAtom);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    iboName: "",
    email: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const IboListFunc = useCallback(async () => {
    return getIBODetails()
      .then((res) => {
        setIboList(res?.data?.data);
      })
      .catch((err) => {
        notification.error({
          message: err?.message,
        });
      });
  }, []);
  useEffect(() => {
    IboListFunc();
  }, [IboListFunc]);
  const addIBOFun = () => {
    setLoading(true);
    addIBO(form)
      .then(async (res) => {
        console.log("res", res);
        message.success("IBO Created Successfully");
        await IboListFunc();
        setForm({
          firstName: "",
          lastName: "",
          iboName: "",
          email: "",
          contactNumber: "",
        });
        setLoading(false);
        setCreateIBO(false);
      })
      .catch((err) => {
        notification.error({
          message: err?.message,
        });
        setLoading(false);
      })
      .finally((s) => {
        setLoading(false);
      });
  };

  return (
    <div className="flex w-full h-screen ">
      <Row className="w-full">
        <Col
          sm={24}
          lg={12}
          className="bg-primary flex items-center justify-center"
        >
          <img
            src={image1}
            style={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col
          sm={24}
          lg={12}
          className="bg-white flex flex-col flex-1 py-32 px-20"
        >
          <div>
            <div className="text-6xl font-thin text-primary">
              Perform<span className="font-bold">mint</span>
            </div>
            <div className="mt-5 flex items-center">
              <div className="text-2xl flex-1 tracking-wider font-thin text-black">
                Welcome!
              </div>
              <Button
                onClick={() => {
                  setCreateIBO(true);
                }}
                size="large"
                className=" text-lg bg-primary text-white "
              >
                Create an IBO
              </Button>
            </div>
          </div>
          {IboList?.length ? (
            <Row gutter={[20, 20]} className=" mt-10  justify-between">
              {IboList?.map((item) => {
                return <IBOCard item={item} />;
              })}
            </Row>
          ) : (
            <>
              <div className="flex justify-center items-center">
                <img
                  src={image2}
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="text-5xl mt-10 flex justify-center">
                <Button
                  onClick={() => {
                    setCreateIBO(true);
                  }}
                  size="large"
                  className="w-[300px] text-xl bg-primary text-white "
                >
                  Create an IBO
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
      <Modal width={700} open={createIBO} footer={false} closable={false}>
        <div>
          <div className="text-3xl font-bold text-primary">Create an IBO</div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <div>First Name</div>
              <Input
                value={form.firstName}
                onChange={(e) => {
                  setForm({ ...form, firstName: e.target.value });
                }}
                className="border  mt-2 border-primary rounded-md w-[300px] h-[50px] px-5"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-1 ">
              <div>Last Name</div>
              <Input
                value={form.lastName}
                onChange={(e) => {
                  setForm({ ...form, lastName: e.target.value });
                }}
                className="border mt-2  border-primary rounded-md w-[300px] h-[50px] px-5"
                placeholder="Last Name"
              />
            </div>
            <div className="col-span-1">
              <div>IBO Name</div>
              <Input
                className="border mt-2  border-primary rounded-md w-[300px] h-[50px] px-5"
                placeholder="IBO Name"
                value={form.iboName}
                onChange={(e) => {
                  setForm({ ...form, iboName: e.target.value });
                }}
              />
            </div>
            <div className="col-span-1">
              <div>Email</div>
              <Input
                className="border mt-2  border-primary rounded-md w-[300px] h-[50px] px-5"
                placeholder="Email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </div>
            <div className="col-span-1">
              <div>Contact Number</div>
              <Input
                className="border mt-2  border-primary rounded-md w-[300px] h-[50px] px-5"
                placeholder="Contact Number"
                value={form.contactNumber}
                onChange={(e) => {
                  setForm({ ...form, contactNumber: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex justify-end items-end mt-10">
            <Button
              onClick={() => {
                setCreateIBO(false);
                setLoading(false);
                setForm({
                  firstName: "",
                  lastName: "",
                  iboName: "",
                  email: "",
                  contactNumber: "",
                });
              }}
              size="large"
              className=" text-lg border-1 border-primary text-black "
            >
              Cancel
            </Button>
            <Button
              loading={loading}
              onClick={() => {
                addIBOFun();
              }}
              size="large"
              className=" text-lg ml-5 bg-primary text-white "
            >
              Create
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default IBOSelection;
