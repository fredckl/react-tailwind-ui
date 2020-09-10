import React from 'react';
import { Container, Grid, Col } from '../reta-ui/grid';
import { Text } from '../reta-ui';

const DisplayGrid = () => {
  return (
    <Container mx={'auto'}>
      <Grid cols={2} gap={4}>
        <Col bg="blue-600" h={12} border={{width: ['l', 'r'], color: 'grey-700'}}>&nbsp;</Col>
        <Col bg="red-600">&nbsp;</Col>
        <Col bg="red-600">&nbsp;</Col>
        <Col bg="blue-600">&nbsp;</Col>
      </Grid>
      <Grid cols={4} sm={3} md={2} gap={4}>
        <Col className={['bg-blue-500', 'text-white']} span={2} style={{ backgroundColor: 'yellow' }}>
          <div className="text-center py-4">
            &nbsp;
          </div>
        </Col>
        <Col bg={'red-500'} textcolor={'blue-300'} textsize={'xs'} pl={3}>
          <p>Hello</p>
        </Col>
        <Col>
          <Text textcolor={'yellow-900'} textsize={'lg'}>Hello from Text</Text>
        </Col>
        
        <Col span={2} p={10} start={1} end={'3'}>
          <p>Hello</p>
        </Col>
      </Grid>
      </Container>
  );
};

export default DisplayGrid;
