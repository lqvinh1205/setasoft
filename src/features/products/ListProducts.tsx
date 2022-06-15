import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts } from "./ProductSlice";
import { Table } from "antd";
import { Link } from "react-router-dom";
type Props = {};

const ListProducts = (props: Props) => {
  const dispath = useAppDispatch();
  const data = useAppSelector((state) => state.product.value);
  useEffect(() => {
    dispath(getAllProducts());
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Content",
      dataIndex: "body",
    },
    {
      title: "Action",
      width: "15%",
      render: (text: any) => (
        <div className="flex flex-wrap">
          <Link to="">
            <button className="bg-[#01afe4] text-[#fff] px-2 py-1 mr-3">
              Edit
            </button>
          </Link>
          <button className="bg-[#e40101] text-[#fff] px-2 py-1">Remove</button>
        </div>
      ),
    },
  ];
  return (
    <div className="p-[80px] border">
      <div>
        <Link to="add">
          <button className="bg-[#0854bf] text-[#fff] px-2 py-1 mb-3">
            Add Post
          </button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ListProducts;
