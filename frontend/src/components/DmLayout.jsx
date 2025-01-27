
import {useAppContext} from './Context'
import ServerBar from './ServerBar';

import Friends from './Friends'

import styled from 'styled-components'
import TextChannel from './TextChannel'


const Layout = styled.div`

display:grid;
grid-template-columns: auto auto 1fr

`


 function DmLayout()
{

      const { servers, setServers, section, setSection, createServerDialoge, setCreateServerDialoge } = useAppContext();

      return(
        <Layout>
             <ServerBar
        serverDialog={createServerDialoge}
        setDialog={setCreateServerDialoge}
        servers={servers}
        setServers={setServers}
        setSection={setSection}
      />
      <Friends isDm={true}></Friends>

      <TextChannel isDm={true}></TextChannel>

        </Layout>
      )
    

}


export default DmLayout;