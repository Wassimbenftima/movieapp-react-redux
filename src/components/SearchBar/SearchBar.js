import React from 'react';
import { Input,Col,Row} from 'reactstrap';
import {connect} from "react-redux";
import Rating from '../Rating/Rating';
import {searchHandler} from '../../JS/actions/actions';
const SearchBar = ({searchHandler, rateSearch})=>{
    return (
        <Row className='search-bar'>
        <Col md={6}>
            <Input type="text" placeholder="please enter your movie title"
            onChange={(e)=> searchHandler (e.target.value)}
            />
            </Col>
            <Col md={4}>
                <Rating count={rateSearch}/>
            </Col>
            </Row>
    );
    
};
const mapStateToProps = state => {
   return { rateSearch:state.rateSearch}
};

export default connect(mapStateToProps,{searchHandler}) (SearchBar);