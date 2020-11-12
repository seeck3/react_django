import React, { FormEvent, SyntheticEvent, useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';
import { RequestType } from '../../typesdefs';

type Props = {
  requestType: RequestType;
  articleID?: string;
  btnText: string;
};

export const FormComponent = ({ requestType, articleID, btnText }: Props) => {
  const [form] = Form.useForm();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const resetState = () => {
    setTitle('');
    setContent('');
  };

  const handleFormSubmit = (
    e: SyntheticEvent,
    requestType: RequestType,
    articleID?: string
  ) => {
    switch (requestType) {
      case 'post':
        axios
          .post('http://localhost:8000/api/', {
            title,
            content,
          })
          .then((res) => {
            resetState();
            console.log('res', res);
          })
          .catch((err) => console.log(err));
        break;
      case 'put':
        axios
          .put(`http://localhost:8000/api/${articleID}/`, {
            title,
            content,
          })
          .then((res) => {
            resetState();
            console.log(res);
          })
          .catch((err) => console.log(err));
        break;
    }
  };

  return (
    <>
      <Form
        onSubmitCapture={(e: SyntheticEvent) =>
          handleFormSubmit(e, requestType, articleID)
        }
        layout='vertical'
        form={form}
      >
        <Form.Item label='Title'>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name='title'
            placeholder='Put a Title here'
          />
        </Form.Item>
        <Form.Item label='Content'>
          <Input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            name='content'
            placeholder='Enter some content ...'
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
