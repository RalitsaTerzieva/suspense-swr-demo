import { SWRConfig } from 'swr';
import PokeContainer from './components/Pokemon/PokeContainer';
import fetcher from './components/Pokemon/fetcher';
import { StyledPokedex, StyledTitle } from './components/Pokemon/Pokemon.styled';


function App() {
  return (
    <> 
      <StyledTitle>Pokedex</StyledTitle>     

      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  )
}

export default App;
