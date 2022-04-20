import GlobalStyle from "./globalStyles"
import {ThemeProvider} from 'styled-components'
import { darkTheme, lightTheme } from "./components/Themes"
import {Route, Switch} from "react-router"
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import MyProjects from './components/MyProjects'
import MySkillsPage from "./components/MySkillsPage"
import WorkPage from './components/WorkPage'

function App() {
  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={MyProjects} />
      <Route exact path="/work2" component={WorkPage} />
      <Route exact path="/skills" component={MySkillsPage} />
    </Switch>

    </ThemeProvider>

    
    </>
    
}


export default App

