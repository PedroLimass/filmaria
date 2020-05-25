import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';


class Home extends Component{

	constructor(props){
		super(props);
		this.state = {
			filmes: [] 
		};

		this.loadFilmes = this.loadFilmes.bind(this);
	}

	componentDidMount(){
		this.loadFilmes();
	}

	loadFilmes(){
		let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
		fetch(url)			  // Metodo para fazer a requisição HTTP
		.then((r)=> r.json()) // A resposta sendo um JSON iremos passar esse paramentro para a String! 
		.then((json) =>{
			this.setState({filmes: json});
			console.log(json);
		});
	}

	render(){
		return(
			<div className='container'>

				<div className='listaFilmes'>
					{this.state.filmes.map((filme) => {
						return(
							<article key = {filme.id} className='filmesPost'>
								<strong>{filme.nome}</strong>
								<img src={filme.foto} alt='Capa'/>
								<Link to={`/filme/${filme.id}`}>Acessar</Link>
							</article>
						);
					})}
				</div>

			</div>
		);
	}
}

export default Home;