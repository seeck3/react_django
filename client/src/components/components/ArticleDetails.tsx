import React, { Fragment, useEffect, useState } from 'react';
import { List, Avatar, Space, Row, Col, Button, Form } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Card } from 'antd';
import { FormComponent } from '../Form/FormComponent';
import { RequestType } from '../../typesdefs';
import { RouteComponentProps } from 'react-router-dom';

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
type MatchProps = {
  articleID: string;
};
interface Props extends RouteComponentProps<MatchProps> {}
export const ArticleDetails = ({ match, history }: Props) => {
  const [article, setArticle] = useState<any>({});
  useEffect(() => {
    const articleID = match.params.articleID;
    axios.get(`http://localhost:8000/api/${articleID}`).then((res) => {
      setArticle(res.data);
    });
  }, []);

  const handleDeleteArticle = () => {
    axios
      .delete(`http://localhost:8000/api/${match.params.articleID}`)
      .then((res) => {
        history.push('/');
      });
  };

  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Card title={article.title}>
            <p>{article.content}</p>
          </Card>
          <Form onSubmitCapture={handleDeleteArticle}>
            <Button type='primary' danger htmlType='submit'>
              Delete
            </Button>
          </Form>
        </Col>
        <Col span={6}>
          <FormComponent
            requestType={RequestType.PUT}
            articleID={article.id}
            btnText='Update'
          />
        </Col>
      </Row>
    </Fragment>
  );
};
