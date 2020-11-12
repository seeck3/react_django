import React, { Fragment, useEffect, useState } from 'react';
import { List, Avatar, Space, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import { FormComponent } from '../Form/FormComponent';
import { RequestType } from '../../typesdefs';

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export const ArticleLists = () => {
  const [articles, setArticles] = useState<any>([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/').then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <Row>
      <Col span={18}>
        <List
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={articles}
          footer={
            <Fragment>
              <b>ant design</b> footer part
            </Fragment>
          }
          renderItem={(item: any) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text='156'
                  key='list-vertical-star-o'
                />,
                <IconText
                  icon={LikeOutlined}
                  text='156'
                  key='list-vertical-like-o'
                />,
                <IconText
                  icon={MessageOutlined}
                  text='2'
                  key='list-vertical-message'
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt='logo'
                  src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`/${item.id}`}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Col>
      <Col span={6}>
        <h2>Create an article</h2>
        <FormComponent requestType={RequestType.POST} btnText='Create' />
      </Col>
    </Row>
  );
};
