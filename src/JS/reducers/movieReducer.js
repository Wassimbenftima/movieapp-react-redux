import {  SEARCH_INPUT,RATING_SEARCH,DELETE_MOVIE ,ADD_MOVIE,EDIT_MOVIE} from '../Const/actionTypes';



const initialState ={
    movieList:[
        {
        id: 1,
        title:'Avatar',
        poster:'https://movieposters2.com/images/703197-b.jpg',
        rating:5,
        trailer:'https://www.youtube.com/embed/6ziBFh3V1aM'
    },
    {
        id:2,
        title: 'Batman',
        poster:"https://www.bestmovieposters.co.uk/wp-content/uploads/2019/02/D2loU_Gp.jpeg",
        rating:4,
        trailer: 'https://www.youtube.com/embed/dgC9Q0uhX70'
    },
    {
        id:3,
        title: 'Anabelle',
        poster:'https://img.over-blog-kiwi.com/1/42/39/36/20190917/ob_65b233_4290749.jpg',
        rating:5,
        trailer:'https://www.youtube.com/embed/kIZDubapYCc'
    },
    {
        id:4,
        title: 'Joker',
        poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGAlOCbFjSysGVCcPWtPD6kfUcIzFKOmo8daKbrSxx-EcYKpUJ',
        rating:3,
        trailer:'https://www.youtube.com/embed/zAGVQLHvwOY'
    }
    ],
    searchInput:'',
    rateSearch:0
    
};
const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SEARCH_INPUT:
        return {
          ...state,
          searchInput: payload
        };
        case RATING_SEARCH:
            return {
                ...state,
                rateSearch:payload
            };
            case ADD_MOVIE:
      return {
        ...state,
        
        movieList: [...state.movieList, payload]
      };
        case DELETE_MOVIE:
                return{
                    ...state,

                    movieList: state.movieList.filter(el => el.id !== payload)
                };
                case EDIT_MOVIE:
                    return {
                      ...state,
                      movieList: state.movieList.map(el =>
                        el.id === payload.id ? payload : el
                      )
                    };
        default:  
        return state;
    }
};
export default movieReducer;
