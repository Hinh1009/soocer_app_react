import React,{Component} from 'react'
import CTitle from '../../components/pieces/Title'
import CSpacer from '../../components/pieces/Spacer'
import CTable from '../../components/parts/Tables'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

class Table extends Component{
render(){
    return(
       <Layout>
           <Header></Header>
           <Content className="container">
               <div>
                   <CTitle>Table</CTitle>
                   <CSpacer></CSpacer>
                   <CTable></CTable>
               </div>
           </Content>
           <Footer></Footer>
       </Layout>
    )
}
}

export default Table