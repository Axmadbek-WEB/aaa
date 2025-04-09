import React, { useState } from 'react';
import { Input, Button, Typography, Modal, List } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph } = Typography;
import "./App.css";

function App() {
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (text.trim()) {
      setMessages([...messages, text.trim()]);
      setText('');
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (indexToDelete) => {
    const filtered = messages.filter((e, index) => index !== indexToDelete);
    setMessages(filtered);
  };

  return (
    <>
      <div style={{
        maxWidth: 600,
        margin: '50px auto',
        padding: 30,
        borderRadius: 20,
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>
        <Title level={2}>Write Something</Title>
        <Paragraph strong>Please write Something..</Paragraph>
        <TextArea
          rows={6}
          placeholder="Biron narsa yozing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={showModal}
          type="primary"
          disabled={!text.trim()}
          style={{ marginTop: 15 }}
        >
          Send
        </Button>

        <List
          header={<div>Kommentlar:</div>}
          dataSource={messages}
          style={{ marginTop: 30 }}
          bordered
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button type="link" danger onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>

      <Modal title="Tasdiqlash" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Ushbu matnni qo‘shmoqchimisiz?</p>
        <p><strong>{text}</strong></p>
      </Modal>
     
      
    </>
  );
}

export default App;
