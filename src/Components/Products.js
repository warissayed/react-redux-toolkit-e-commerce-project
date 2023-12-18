import { useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../Store/CartSlice'
import { getProducts } from '../Store/ProductSlice'
import StatusCode from '../utils/StatusCode'


const Products = () => {
  const dispatch = useDispatch();
  const {data:products,status} = useSelector(state => state.products)

  

  useEffect(()=>{

    dispatch(getProducts());
      // fetch('https://fakestoreapi.com/products')
      // .then(data => data.json())
      // .then(result => setProduct(result))

  },[dispatch]);
  
  if(status === StatusCode.LOADING){
    return <p>loading.....</p>
  }

  if(status === StatusCode.ERROR){
    return <Alert variant='danger'>YOU FUCKED UP BUDDY</Alert>
  }

  const addToMyCart = (product)=>{
          dispatch(addToCart(product))
  }

  const card = products.map(product => (

           <div className='col-md-3 d-flex justify-content-center' style={{marginBottom:'10px'}} >
              <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
                <div className='text-center'>
                  <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px' }}/>
                  </div>
                  <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                   ${product.price}
                  </Card.Text>
                  </Card.Body>
              <Card.Footer style={{backgroundColor:'gray'}}> 
                <Button variant="primary" onClick={()=>(addToMyCart(product))}>Go somewhere</Button>
              </Card.Footer>
            </Card>

         </div>
  ));
   
  return(

        <>
        <h1>Products</h1>
        
        <div className="row">

          {card}
          
        </div>
    
            </>
  )

} 

export default Products