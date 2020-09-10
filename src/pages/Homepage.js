import React from 'react';
import { Container, Grid, Col } from '../reta-ui/grid';
import { Text } from '../reta-ui';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Container mx={'auto'}>
      <Grid cols={4} sm={3} md={2} gap={4}>
        <Col span={2} style={{backgroundColor: 'yellow'}}>
          <Text textcolor="blue-500">Welcome to Reta UI</Text>
        </Col>
        <Col span={12}>
          <Link to="/grid">Show grid</Link>
        </Col>
      </Grid>
      </Container>
  );
};

export default Homepage;
