import React from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
import {Col} from 'reactstrap'
import {ratingSearch} from '../JS/actions/actions'
const  MovieItems = (props) => {
    return (
        <div className="Movies">
             {(
                 props.rateSearch > 0
        ? props.movieList.filter(el => el.rating >= props.rateSearch)
        : props.searchInput
        ? props.movieList.filter(el =>
            el.title.toLowerCase().includes(props.searchInput.toLowerCase().trim())
          ) :props.movieList )
            .map((el,key)=>
            <Col>
            <MovieCard movieList={el} key={key}/>
            </Col>
            )
            
            
    }   
    </div>
)}

const MapStateToProps =state=>{

    return {movieList:state.movieList,
    rateSearch: state.rateSearch,
    searchInput:state.searchInput

    }
}


export default connect(MapStateToProps,{ratingSearch})(MovieItems);