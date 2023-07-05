import React, { useContext } from 'react';
import { MinitabContext } from '../../Context/MinitabContext';
import { Graph, GifContainer, SolutionLayoutTitle, SolutionLayoutContainer } from './SolutionLayout.Style';
import BaseSGraph from '../../Component/Graph';
import FinalSGraph from '../../Component/Graph/optimalGraph';
const SolutionLayout = () => {
    const { minitabData, dispatch } = useContext(MinitabContext)
    return (
        <Graph>
            {minitabData.isGifDisplayed && (
                <GifContainer/>
            )}
            <div className='solution-container'>
                <SolutionLayoutTitle>
                    <h3>Résultats</h3>
                </SolutionLayoutTitle>
                {minitabData.baseSolution && (
                    <SolutionLayoutContainer>
                        <div className='solutions'>
                            <p className='solutions-title'>
                                Solution de base
                            </p>
                            <p className='solutions-p'>
                                Voici la représentation graphique de la solution de base dont le coût total de transport est de :
                                <br/>
                                <span> Z = {minitabData.zBase}</span>
                            </p>
                            <BaseSGraph/>
                        </div>
                        <div className='solutions'>
                            <p className='solutions-title'>
                                Solution optimale
                            </p>
                            <p className='solutions-p'>
                                Voici la représentation graphique de la solution de base dont le coût total de transport est de :
                                <br/>
                                <span>Z = {minitabData.zOptimal}</span>
                            </p>
                            <FinalSGraph/>
                        </div>
                    </SolutionLayoutContainer>
                )}
            </div>
        </Graph>
    )
}

export default SolutionLayout;