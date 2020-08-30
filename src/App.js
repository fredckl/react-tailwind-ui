import React from 'react';
import { Container, Row, Col } from './reta-ui';
import { Text } from './reta-ui';

function App() {
  return (
    <Container mx={'auto'}>
      <Row cols={1} sm={3} md={2} gap={4}>
        <Col className={['bg-blue-500', 'text-white']} span={3} style={{backgroundColor: 'yellow'}}>
          <p className={['text-red-500']}>Hello</p>
        </Col>
        <Col bg={'red-500'} textColor={'blue-300'} textSize={'xs'} pl={3}>
          <p>Hello</p>
        </Col>
        <Col>
          <Text textColor={'yellow-900'} textSize={'lg'}>Hello from Text</Text>
        </Col>
        <Col>
          <p>Hello</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
