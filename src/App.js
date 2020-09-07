import React from 'react';
import { Container, Row, Col, Text } from './reta-ui';
import config from './reta-ui/settings/config';


function App() {
  return (
    <Container mx={'auto'}>
      <Row cols={4} sm={3} md={2} gap={4}>
        <Col className={['bg-blue-500', 'text-white']} span={2} style={{backgroundColor: 'yellow'}}>
          <p className={['text-red-500']}>Hello</p>
          <p className="bg-teal-500 text-4xl text-center">.....</p>
        </Col>
        <Col bg={'red-500'} textcolor={'blue-300'} textsize={'xs'} pl={3}>
          <p>Hello</p>
        </Col>
        <Col>
          <Text textcolor={'yellow-900'} textsize={'lg'}>Hello from Text</Text>
        </Col>
        
        <Col border={'gray-300'} span={2} p={10} start={1} end={'3'}>
          <p>Hello</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
