import { Button } from "@material-ui/core"
import { useRouter } from "next/router"
import Layout from "src/components/Layout"



function video() {
 const router = useRouter()
 
 return(
   <Layout>
     <span>{router.query.id}</span>
     <Button onClick={() => router.back()}>Voltar</Button>
   </Layout>
 )

}

export default video