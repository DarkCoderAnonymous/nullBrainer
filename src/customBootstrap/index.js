import React from 'react';
import { Col } from 'reactstrap';
const Colxx = (props) => (
    <Col {...props}  />
);
const Separator = (props) => (
    <div className={`separator ${props.className}`}></div>
);
export { Colxx,Separator }