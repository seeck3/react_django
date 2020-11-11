import React, { Fragment, useEffect, useState } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import axios from "axios";
import { Card } from "antd";

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export const ArticleDetails = ({ match }: any) => {
  const [article, setArticle] = useState<any>({});
  useEffect(() => {
    const articleID = match.params.articleID;
    axios.get(`http://localhost:8000/api/${articleID}`).then((res) => {
      setArticle(res.data);
    });
  }, []);
  return (
    <Card title={article.title}>
      <p>{article.content}</p>
    </Card>
  );
};
