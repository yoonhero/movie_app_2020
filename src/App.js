import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./components/Movie";
import "./App.css"

/*class App extends React.Component {
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    componentDidMount() {
        console.log("component render");
    }
    render() {
        console.log("render");
        return <div>
            <button onClick={ this.add }>Add</button>
            <button onClick={ this.minus }>Minus</button>
            <h1>The number is: { this.state.count }</h1>
        </div>
    }
}*/
// eslint-disable-next-line 
class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
        /*setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);*/
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie // eslint-disable-next-line 
                                    key={ movie.id }
                                    id={ movie.id }
                                    year={ movie.year }
                                    title={ movie.title }
                                    summary={ movie.summary }
                                    poster={ movie.medium_cover_image }
                                    genres={ movie.genres }
                                />
                            )) }
                        </div>
                    ) }
            </section>
        );
    }
}

export default App;



// eslint-disable-next-line
/*function Food({ name, picture, rating }) {
    return <div>
        <h2>I like { name }</h2>
        <h4>{ rating } / 5.0</h4>
        <img src={ picture } alt={ name } />
    </div>
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 3
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 5
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 2
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 4
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 1
    }
];

function renderFood(dish) {
    console.log(dish);
    return <Food name={ dish.name } picture={ dish.image } />
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function App() {
    return (
        <div>
            <h1> Hello </h1>
            {foodILike.map(dish => (
                <Food key={ dish.id } name={ dish.name } picture={ dish.image } rating={ dish.rating } />
            )) }
        </div>
    );
}*/

//export default App;  