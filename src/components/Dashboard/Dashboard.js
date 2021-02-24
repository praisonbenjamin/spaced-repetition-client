import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LangContext from '../../contexts/LangContext'
import UserContext from '../../contexts/UserContext'
import langApiService from '../../services/lang-service'
import Button from '../Button/Button'

import { WordList } from '../WordList/WordList';


export class Dashboard extends Component {
    static contextType = LangContext

    state = {
        error: null,
        language: null
    }

    componentDidCatch() {
        langApiService
        .getLan()
        .then(data => {
            this.context.processLanguage(data)
        })
        .catch(res => this.setState({ error: res.error }))
    }

    render() {

        const { words } = this.context
        return (
            <UserContext.Consumer>
                { value => {
                    return (
                        <div>
                            <h2>{this.context.language.name}</h2>
                            <p>Total Score: {this.context.language.total_score}</p>


                            <h3>Words to practice</h3>
                            <ul>
                                {words.map((word, i) => (
                                    <WordList key={i} word={word} />
                                ))}
                            </ul>

                            <Link to='/learn'>
                                <Button>Start practicing</Button>
                            </Link>
                        </div>

                    )
                }
            }
            </UserContext.Consumer>
        )
    }
}

export default Dashboard
